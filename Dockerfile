# Base image
FROM node:18

# Create app directory
WORKDIR /application/ecommerce

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Bundle app source
COPY . .

# Execute command
RUN yarn install

# Creates a "dist" folder with the production build
RUN yarn build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]