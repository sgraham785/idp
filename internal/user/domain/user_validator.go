package domain

import (
	"context"
	"regexp"
	"strings"
	"time"
	"unicode"

	"github.com/canary-health/idp/internal/err_msg"
	"github.com/canary-health/idp/internal/user"
)

// IsUserValid validates user opts
func (i *userDomain) IsUserValid(ctx context.Context, opts *user.UpsertUserOpts) (bool, error) {
	err := serviceValidator(opts.ServiceSlug)
	if err != nil {
		defer func(begin time.Time) {
			_ = i.Logger.TwirpLog(ctx, "", opts.ServiceSlug, nil, err, time.Since(begin))
		}(time.Now())
		return false, err
	}

	err = emailValidator(opts.Email)
	if err != nil {
		defer func(begin time.Time) {
			_ = i.Logger.TwirpLog(ctx, "", nil, nil, err, time.Since(begin))
		}(time.Now())
		return false, err
	}

	err = passwordValidator(opts.Password, opts.VerifyPassword)
	if err != nil {
		defer func(begin time.Time) {
			_ = i.Logger.TwirpLog(ctx, "", nil, nil, err, time.Since(begin))
		}(time.Now())
		return false, err
	}
	return true, nil
}

func serviceValidator(s string) error {
	if s == "" {
		return errmsg.ServiceSlugRequired
	}
	return nil
}

// worried about an imperfect regex? see: http://www.regular-expressions.info/email.html
var emailRegex = regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

func emailValidator(s string) error {
	if s != "" {
		// SECURITY: the len() check prevents a regex ddos via overly large usernames
		if len(s) > 0 && len(s) < 255 && !emailRegex.Match([]byte(s)) {
			return errmsg.EmailMalformed
		}
		return nil
	}
	return errmsg.EmailOrPasswordInvalid
}

func hasDomain(email string, domains []string) bool {
	pieces := strings.SplitN(email, "@", 2)
	for _, domain := range domains {
		if domain == pieces[1] {
			return true
		}
	}
	return false
}

func passwordValidator(s, v string) error {
	if len(s) < 8 && len(s) > 40 {
		return errmsg.PasswordMalformed
	}
	if s != v {
		return errmsg.PasswordAndVerifyPasswordDoNotMatch
	}
	number := 0
	upper := 0
	special := 0
	for _, s := range s {
		switch {
		case unicode.IsNumber(s):
			number++
		case !unicode.IsUpper(s):
			upper++
		case !unicode.IsPunct(s) || !unicode.IsSymbol(s):
			special++
		default:
			return errmsg.PasswordMalformed
		}
	}
	if number == 0 || upper == 0 || special == 0 {
		return errmsg.PasswordMalformed
	}
	return nil
}
