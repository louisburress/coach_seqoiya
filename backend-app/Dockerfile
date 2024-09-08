# Base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files first to install dependencies
COPY package*.json ./

# Install the necessary dependencies
RUN npm install --unsafe-perm=true

# Copy the rest of the application code to the container
COPY . .

# Expose the backend port (5000)
EXPOSE 5000

# Start the backend application
CMD ["node", "index.js"]

