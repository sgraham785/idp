FROM 872941275684.dkr.ecr.us-east-1.amazonaws.com/alpine-go:1.11 AS builder

WORKDIR /go/src/github.com/canary-health/idp/
COPY . .
RUN make dep
RUN make build-server

FROM scratch
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /tmp/canarypasswd /etc/passwd
COPY --from=builder /.aws/credentials /.aws/
WORKDIR /go/bin
COPY --from=builder /go/src/github.com/canary-health/idp/heartbeat /go/bin/
COPY --from=builder /go/src/github.com/canary-health/idp/bin/idp-server /go/bin/
USER canary
ENTRYPOINT ["./idp-server"]
