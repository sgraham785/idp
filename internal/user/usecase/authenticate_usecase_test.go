package usecase_test

import (
	"context"
	"os"
	"testing"

	"github.com/bxcodec/faker"
	"github.com/canary-health/idp/internal/err_msg"
	"github.com/canary-health/idp/internal/user"
	"github.com/canary-health/idp/internal/user/infrastructure/mocks"
	"github.com/canary-health/idp/internal/user/usecase"
	"github.com/go-kit/kit/log"
	"github.com/stretchr/testify/assert"
)

func Test_userUsecase_AuthenticateUser(t *testing.T) {
	mockUserDB := new(mocks.UserDatabase)
	var mockAuthOpts user.AuthenticateUserOpts
	err := faker.FakeData(&mockAuthOpts)
	var mockUserUUID *user.UserUUID
	err = faker.FakeData(&mockUserUUID)
	assert.NoError(t, err)

	mockUserDB.On("AuthenticateUser", context.Background(),
		&user.AuthenticateUserOpts{
			ServiceSlug: "test",
			Email:       "email@email.com",
			Password:    "12345#Qwerty",
		}).Return(mockUserUUID, nil)
	ll := log.NewLogfmtLogger(os.Stderr)
	u := usecase.NewUserUsecase(mockUserDB, ll)

	var goodOpts = user.AuthenticateUserOpts{
		ServiceSlug: "test",
		Email:       "email@email.com",
		Password:    "12345#Qwerty",
	}

	uuid, err := u.AuthenticateUser(context.Background(), &goodOpts)
	assert.NotEmpty(t, uuid)
	assert.NoError(t, err)
	assert.Equal(t, uuid, mockUserUUID)

	mockUserDB.AssertCalled(t, "AuthenticateUser", context.Background(),
		&user.AuthenticateUserOpts{
			ServiceSlug: "test",
			Email:       "email@email.com",
			Password:    "12345#Qwerty",
		},
	)
}

func Test_userUsecase_AuthenticateUser_Missing_ServiceSlug(t *testing.T) {
	mockUserDB := new(mocks.UserDatabase)
	var mockAuthOpts user.AuthenticateUserOpts
	err := faker.FakeData(&mockAuthOpts)
	var mockUserUUID *user.UserUUID
	err = faker.FakeData(&mockUserUUID)
	assert.NoError(t, err)

	var expectedError = errmsg.ServiceSlugRequired
	var missingServiceSlugOpts = &user.AuthenticateUserOpts{
		ServiceSlug: "",
		Email:       "email@email.com",
		Password:    "12345#Qwerty",
	}

	mockUserDB.On("AuthenticateUser", context.Background(),
		missingServiceSlugOpts).Return(nil, expectedError)
	ll := log.NewLogfmtLogger(os.Stderr)
	u := usecase.NewUserUsecase(mockUserDB, ll)

	uuid, err := u.AuthenticateUser(context.Background(), missingServiceSlugOpts)
	if assert.Error(t, err) {
		assert.Nil(t, uuid)
		assert.NotNil(t, err)
		assert.Equal(t, expectedError, err)
	}
}

func Test_userUsecase_AuthenticateUser_Missing_EmailPassword(t *testing.T) {
	mockUserDB := new(mocks.UserDatabase)
	var mockAuthOpts user.AuthenticateUserOpts
	err := faker.FakeData(&mockAuthOpts)
	var mockUserUUID *user.UserUUID
	err = faker.FakeData(&mockUserUUID)
	assert.NoError(t, err)

	var expectedError = errmsg.EmailAndPasswordRequired
	var missingEmailPassword = &user.AuthenticateUserOpts{
		ServiceSlug: "test",
		Email:       "",
		Password:    "",
	}

	mockUserDB.On("AuthenticateUser", context.Background(),
		missingEmailPassword).Return(nil, expectedError)
	ll := log.NewLogfmtLogger(os.Stderr)
	u := usecase.NewUserUsecase(mockUserDB, ll)

	uuid, err := u.AuthenticateUser(context.Background(), missingEmailPassword)
	if assert.Error(t, err) {
		assert.Nil(t, uuid)
		assert.Equal(t, expectedError, err)
	}
}

func Test_userUsecase_AuthenticateUser_Mismatch_EmailPassword(t *testing.T) {
	mockUserDB := new(mocks.UserDatabase)
	var mockAuthOpts user.AuthenticateUserOpts
	err := faker.FakeData(&mockAuthOpts)
	var mockUserUUID *user.UserUUID
	err = faker.FakeData(&mockUserUUID)
	assert.NoError(t, err)

	var expectedError = errmsg.EmailOrPasswordInvalid
	var emailPasswordOpts = &user.AuthenticateUserOpts{
		ServiceSlug: "test",
		Email:       "e@email.com",
		Password:    "12345#",
	}

	mockUserDB.On("AuthenticateUser", context.Background(),
		emailPasswordOpts).Return(nil, expectedError)
	ll := log.NewLogfmtLogger(os.Stderr)
	u := usecase.NewUserUsecase(mockUserDB, ll)

	uuid, err := u.AuthenticateUser(context.Background(), emailPasswordOpts)
	if assert.Error(t, err) {
		assert.Nil(t, uuid)
		assert.Equal(t, expectedError, err)
	}
}
