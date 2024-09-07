# Dockerfile for frontend

# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Serve the app using serve
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose port
EXPOSE 3000

