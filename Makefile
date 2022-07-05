.PHONY: all generate 
all: generate

generate:
	@echo generate protobuf
	sh generate.sh
	sh buildproto.sh

clean:
	@echo "Cleaning up..."
	rm client/src/pb/*
	rm server/pb/*