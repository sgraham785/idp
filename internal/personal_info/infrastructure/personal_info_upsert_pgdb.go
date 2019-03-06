package infrastructure

import (
	"context"
	"time"

	"github.com/canary-health/idp/internal/personal_info"
	"github.com/canary-health/idp/internal/user"
)

func (i *personalInfoDatabase) UpsertPersonalInfo(ctx context.Context, opts *personalinfo.UpsertPersonalInfoOpts) (*user.UserUUID, error) {

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

	var result user.UserUUID
	err := i.DB.QueryRowx(sql, opts.UserUUID, opts.FirstName, opts.LastName, opts.Gender, opts.Birthdate, opts.PhoneNumber, opts.PhoneNumberCode, opts.StreetAddress, opts.StreetAddress2, opts.City, opts.StateProvince, opts.ZipPostal, opts.Country).StructScan(&result)
	defer func(begin time.Time) {
		_ = i.Logger.TwirpLog(ctx, opts.UserUUID, result, err, time.Since(begin))
	}(time.Now())
	if err != nil {
		return nil, err
	}

	return &result, nil
}
