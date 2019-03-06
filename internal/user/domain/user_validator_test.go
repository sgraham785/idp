package domain

import (
	"testing"
)

func Test_serviceValidator(t *testing.T) {
	type args struct {
		s string
	}
	tests := []struct {
		name    string
		args    args
		wantErr bool
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := serviceValidator(tt.args.s); (err != nil) != tt.wantErr {
				t.Errorf("serviceValidator() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func Test_emailValidator(t *testing.T) {
	type args struct {
		s string
	}
	tests := []struct {
		name    string
		args    args
		wantErr bool
	}{
		// TODO: Add test cases.
		{"empty email format", args{""}, true},
		{"bad email format", args{"sdfds"}, true},
		{"good email format", args{"email@email.com"}, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := emailValidator(tt.args.s); (err != nil) != tt.wantErr {
				t.Errorf("emailValidator(%s) error = %v, wantErr %v", tt.args.s, err, tt.wantErr)
			}
		})
	}
}

func Test_hasDomain(t *testing.T) {
	type args struct {
		email   string
		domains []string
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := hasDomain(tt.args.email, tt.args.domains); got != tt.want {
				t.Errorf("hasDomain() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_passwordValidator(t *testing.T) {
	type args struct {
		s string
		v string
	}
	tests := []struct {
		name    string
		args    args
		wantErr bool
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := passwordValidator(tt.args.s, tt.args.v); (err != nil) != tt.wantErr {
				t.Errorf("passwordValidator() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}
