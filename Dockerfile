FROM node:16-alpine3.16 AS builder

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


# copy the app, note .dockerignore
COPY package.json /usr/src/app/package.json
RUN npm install
COPY ./ ./

RUN npm run build


# Stage 2

FROM node:16-alpine3.16
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
COPY --from=builder /usr/src/app .


EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "run", "start"]
