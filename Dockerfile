FROM node:8
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./
RUN npm install
# Copy app source code
COPY . .
RUN npm run build
#Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]