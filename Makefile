.PHONY: all generate 
all: generate

generate:
	@echo generate protobuf
	sh generate.sh

clean:
	@echo "Cleaning up..."
	rm client/pb/*
	rm server/pb/*