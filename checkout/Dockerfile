# Use the Node.js base image from Alpine Linux
FROM node:lts-alpine

# Set the environment to production
ENV NODE_ENV=production

# Define the working directory inside the container
# You should point this to the relevant path where your application code will reside inside the container.
WORKDIR /usr/src/app

# Copy your package.json and lock files first to install dependencies
COPY ["package.json", "./"]

# Install only production dependencies
RUN npm install --production --silent && mv node_modules ../

# Copy the rest of your application code into the container
# This will copy everything from the directory where Dockerfile is located
COPY . .

# Expose the application on port 5001
EXPOSE 5001
EXPOSE 3500  

# Change ownership to node user
RUN chown -R node /usr/src/app

# Switch to node user
USER node

# Command to run your application
CMD ["npm", "start"]
