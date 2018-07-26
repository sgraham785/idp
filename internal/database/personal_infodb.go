package database

import (
	"context"
	"time"

	"github.com/canary-health/idp/_rpc/personal_info"
	"github.com/canary-health/idp/_rpc/users"
	"github.com/canary-health/idp/internal/middleware"
	"github.com/go-kit/kit/log"
	"github.com/jmoiron/sqlx"
)

// PersonalInfoDatabase is the set of calls that can be made to the database for personal_info
type PersonalInfoDatabase interface {
	UpsertPersonalInfo(ctx context.Context, opts *personalinfo.UpsertPersonalInfoOpts) (*users.UserUUID, error)
	GetPersonInfoByUserUUID(ctx context.Context, iuuid *users.UserUUID) (*personalinfo.PersonalInfoPayload, error)
}

// NewPersonalInfoDatabase is called to connect to the db for personal_info
func NewPersonalInfoDatabase(db *sqlx.DB, logger log.Logger) PersonalInfoDatabase {
	lmw := middleware.LoggingMiddleware(logger)
	return &personalInfoDatabase{db, lmw}
}

type personalInfoDatabase struct {
	db     *sqlx.DB
	logger *middleware.LoggerMiddleware
}

func (i *personalInfoDatabase) UpsertPersonalInfo(ctx context.Context, opts *personalinfo.UpsertPersonalInfoOpts) (*users.UserUUID, error) {

	sql := `INSERT INTO personal_info (
		user_uuid,
		first_name,
		last_name,
		gender,
		birthdate,
		phone_number,
		phone_number_code,
		street_address,
		street_address2,
		city,
		state_province,
		zip_postal,
		country 
	)
	VALUES
		(
			$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 
		) ON CONFLICT ON CONSTRAINT personal_info_pkey DO
	UPDATE 
		SET (
			user_uuid,
			first_name,
			last_name,
			gender,
			birthdate,
			phone_number,
			phone_number_code,
			street_address,
			street_address2,
			city,
			state_province,
			zip_postal,
			country 
			) = (
			EXCLUDED.user_uuid,
			EXCLUDED.first_name,
			EXCLUDED.last_name,
			EXCLUDED.gender,
			EXCLUDED.birthdate,
			EXCLUDED.phone_number,
			EXCLUDED.phone_number_code,
			EXCLUDED.street_address,
			EXCLUDED.street_address2,
			EXCLUDED.city,
			EXCLUDED.state_province,
			EXCLUDED.zip_postal,
			EXCLUDED.country 
		) RETURNING user_uuid`

	var result users.UserUUID
	err := i.db.QueryRowx(sql, opts.UserUUID, opts.FirstName, opts.LastName, opts.Gender, opts.Birthdate, opts.PhoneNumber, opts.PhoneNumberCode, opts.StreetAddress, opts.StreetAddress2, opts.City, opts.StateProvince, opts.ZipPostal, opts.Country).StructScan(&result)
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, opts.UserUUID, result, err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}

	return &result, nil
}

func (i *personalInfoDatabase) GetPersonInfoByUserUUID(ctx context.Context, iuuid *users.UserUUID) (*personalinfo.PersonalInfoPayload, error) {

	sql := `SELECT * FROM personal_info WHERE user_uuid = $1`

	var result personalinfo.PersonalInfoPayload
	err := i.db.QueryRowx(sql, iuuid.UserUUID).StructScan(&result)
	defer func(begin time.Time) {
		_ = i.logger.Log(ctx, iuuid.UserUUID, result.UserUUID, err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}

	return &result, nil
}
