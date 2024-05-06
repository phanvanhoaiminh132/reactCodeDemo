# Use an image containing Node.js LTS version
FROM node:16.17.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the /app directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory into the /app directory in the container
COPY . .

# Build the ReactJS application
RUN npm run build

# Expose port 80 of the container
EXPOSE 80

# Start a web server to serve the built ReactJS application
CMD ["npx", "serve", "-s", "-l", "80", "build"]