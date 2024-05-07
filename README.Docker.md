## dowload and setting docker
Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)

# Building and running your application

## Clone source
clone source from github: (https://github.com/phanvanhoaiminh132/reactCodeDemo).

## Move into the project folder
open terminal and run: `cd reactCodeDemo`

## build docker file
run: `docker-compose build --no-cache`
When you're ready, start your application by running: `docker compose up --watch`.

Your application will be available at http://localhost:3001.

# Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

# References
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)