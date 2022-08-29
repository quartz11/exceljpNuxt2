FROM node:lts

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


# copy the app, note .dockerignore
COPY package.json /usr/src/app/package.json
RUN npm install
COPY ./ ./
RUN npm run generate
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "run", "start" ]
