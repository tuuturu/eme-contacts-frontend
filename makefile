NAME=`jq -r .name package.json`
VERSION=`jq -r .version package.json`
REPOSITORY=registry.develish.net

run:
	npm run serve

run-in-docker:
	docker stop contacts-frontend || true
	docker run \
		--rm -d -p 8080:80 \
		-e VUE_APP_BASE_URL=http://localhost:8080 \
		-e VUE_APP_GATEKEEPER_URL=http://localhost:4554 \
		-e VUE_APP_UPSTREAM_URL=http://localhost:3000 \
		--name contacts-frontend \
		${REPOSITORY}/${NAME}:${VERSION}

build:
	docker build \
		--tag ${REPOSITORY}/${NAME}:${VERSION} .

generate-dotenv-file:
	echo "VUE_APP_BASE_URL=" >> .env
	echo "VUE_APP_LOGIN_URL=" >> .env
	echo "VUE_APP_LOGOUT_URL=" >> .env
	echo "VUE_APP_UPSTREAM_URL=" >> .env
