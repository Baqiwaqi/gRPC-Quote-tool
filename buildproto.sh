
#!/bin/sh
# these files 

set -xe

OUT_DIR=./client/src/pb

protoc --version
protoc -I=proto quote.proto \
  --js_out=import_style=commonjs,binary:$OUT_DIR \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$OUT_DIR