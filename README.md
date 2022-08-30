# excellence-jp

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories
<details>

<summary>Click to see detail of Special Directories</summary>

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


</details>

>____

## Docker
```sh

# This current docker use Windows 10 + WSL2 some command may different from Linux

# First preparation
create Dockerfile and write command to create docker image

# Second preparation
create .dockerignore to ignore some files (this .dockerignore do like .gitignore) in this case ignore node_modules

# create Docker image
$ docker build -t dockerImageName .
# You can define your docker image name instead of dockerImageName

# you can see a list of Docker image on your machine by
$ docker images
# It will show list of docker images that available in this current machine

# There are 3 columns you must interested in 
# First REPOSITORY (Name of Docker image)
# Second TAG (this is version of Docker image)
# Third IMAGE ID
# You can run docker image by these 3 columns

There are 2 ways to run Docker image
1. Normal run

# You can run Docker image by DockerImageName and DockerImageTAG
$ docker run -p 3000:3000 DockerImageName:DockerImageTAG

# You can run Docker image by IMAGE ID
$ docker run -p 3000:3000 DockerImageID

2. Background run

# You can run Docker image by DockerImageName and DockerImageTAG
$ docker run -d -p 3000:3000 DockerImageName:DockerImageTAG

# You can run Docker image by IMAGE ID
$ docker run -d -p 3000:3000 DockerImageID

# Show current running containers and stop containers

Show current running Docker container
$ docker ps
# It will show current running Docker containers you must focus on CONTAINER ID

Stop containers
$ docker container stop CONTAINERID
#You only use Container ID to stop container (cannot use container image name)

```
