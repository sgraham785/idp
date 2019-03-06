package infrastructure_test

import (
	"context"
	"fmt"
	"os"
	"testing"

	sqlmock "github.com/DATA-DOG/go-sqlmock"
	"github.com/bxcodec/faker"
	"github.com/canary-health/idp/internal/user"
	"github.com/canary-health/idp/internal/user/infrastructure"
	"github.com/go-kit/kit/log"
	"github.com/jmoiron/sqlx"
	"github.com/stretchr/testify/assert"
	"golang.org/x/crypto/bcrypt"
)

func Test_userDatabase_AuthenticateUser(t *testing.T) {
	// open database stub
	mockDB, mock, err := sqlmock.New()
	if err != nil {
		t.Errorf("An error '%s' was not expected when opening a stub database connection", err)
	}
	defer mockDB.Close()
	sqlxDB := sqlx.NewDb(mockDB, "sqlmock")
	ll := log.NewLogfmtLogger(os.Stderr)
	// log := logger.NewLogger(ll)
	i := infrastructure.NewUserDatabase(sqlxDB, ll)

	var mockAuthOpts *user.AuthenticateUserOpts
	err = faker.FakeData(&mockAuthOpts)
	var mockAuthPayload *user.AuthenticateUserPayload
	err = faker.FakeData(&mockAuthPayload)
	var mockUserUUID *user.UserUUID
	err = faker.FakeData(&mockUserUUID)
	assert.NoError(t, err)

	// sql := `^SELECT (.+) FROM users WHERE`
	hash, err := bcrypt.GenerateFromPassword([]byte(mockAuthOpts.Password), 10)
	fmt.Printf("bcrypt hash -> %v\n", hash)
	rows := sqlmock.NewRows([]string{"user_uuid", "service_slug", "email", "password"}).
		AddRow(mockUserUUID.UserUUID, mockAuthOpts.ServiceSlug, mockAuthOpts.Email, hash)

	mock.
		ExpectQuery("^SELECT (.+) FROM users WHERE").
		WithArgs(mockAuthOpts.ServiceSlug, mockAuthOpts.Email).
		WillReturnRows(rows)

	result, err := i.AuthenticateUser(context.Background(), mockAuthOpts)
	assert.NotEmpty(t, result)
	assert.Equal(t, result, mockUserUUID)
	assert.NoError(t, err)
}
