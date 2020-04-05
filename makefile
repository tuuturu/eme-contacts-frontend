VERSION=`cat package.json | jq .version | cut -d"\"" -f2`
REPOSITORY=registry.develish.net

run:
	npm run serve

run-in-docker:
	docker stop contacts-frontend || true
	docker run \
		--rm -d -p 8080:80 \
		--name contacts-frontend \
		${REPOSITORY}/contacts-frontend:${VERSION}

build:
	docker build \
		--no-cache \
		--tag ${REPOSITORY}/contacts-frontend:${VERSION} .

generate-dotenv-file:
	echo "VUE_APP_BASE_URL=" >> .env
	echo "VUE_APP_LOGIN_URL=" >> .env
	echo "VUE_APP_LOGOUT_URL=" >> .env
	echo "VUE_APP_UPSTREAM_URL=" >> .env
