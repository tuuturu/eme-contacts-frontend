#!/bin/sh

TARGET_PATH=/usr/share/nginx/html/index.html
VARS=$(env | grep VUE_APP_)

CONTENT="<head><script>process={env:{"

for var in ${VARS}
do
	CONTENT=${CONTENT}$(echo ${var} | awk -F'=' '{ printf $1; printf ":\""; printf $2; printf "\","; next }1' -)
done

CONTENT="${CONTENT}}}</script>"

awk -v content="${CONTENT}" -F'<head>' '/<head>/ { printf $1; printf content; printf $2; next }' ${TARGET_PATH} > ${TARGET_PATH}.new
mv ${TARGET_PATH}.new ${TARGET_PATH}

nginx -g 'daemon off;'
