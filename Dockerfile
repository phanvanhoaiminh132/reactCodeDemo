# Use an image containing Node.js LTS version
ARG NODE_VERSION=16.17.1
FROM node:${NODE_VERSION}-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the /app directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory into the /app directory in the container
COPY --chown=app:app . /app
