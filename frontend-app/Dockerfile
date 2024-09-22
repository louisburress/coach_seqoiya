# Use node:18-alpine as the base image for stability
FROM node:18-alpine

# Create a non-root user and group to use inside the container
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files first to install dependencies
COPY package*.json ./

# Install dependencies, including Tailwind, PostCSS, and Autoprefixer, while ensuring permissions are maintained
RUN npm install --unsafe-perm=true \
    && npm install -D tailwindcss postcss autoprefixer

# Copy the rest of the app files to the container
COPY public/ /app/public/
COPY src/ /app/src/

# Ensure all images in the public folder have correct permissions
RUN chmod 755 /app/public/images/*.jpg

# Install 'serve' globally as root before switching to the non-root user
RUN npm install -g serve --unsafe-perm

# Change ownership of the working directory to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Build the React app for production (including Tailwind build)
USER root
RUN npm run build

# Switch back to the non-root user to serve the app
USER appuser

# Expose port 3001 for the app
EXPOSE 3001

# Serve the build files on port 3001
CMD ["serve", "-s", "build", "-l", "3001"]

