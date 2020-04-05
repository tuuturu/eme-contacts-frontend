### Build stage
FROM node:lts-alpine AS build-stage

WORKDIR /build
COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

### Run
FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /build/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
