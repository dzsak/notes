build-web:
	(cd web; npm install; npm run build)
	rm -rf server/web/build
	mkdir -p server/web/build
	@cp -r web/build/* server/web/build

PHONY: build-web
