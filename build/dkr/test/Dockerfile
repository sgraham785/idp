FROM 872941275684.dkr.ecr.us-east-1.amazonaws.com/alpine-go:1.11 AS builder

WORKDIR /go/src/github.com/canary-health/idp/
COPY . .

RUN make dep
RUN make test