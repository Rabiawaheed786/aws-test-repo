# Dockerfile
# Base Image
FROM node:18-alpine

# Working dir
WORKDIR /app

# install curl for health check
# curl ki madad se healthcheck API call karega
RUN apk --no-cache add curl

# copy package files
COPY package*.json ./
RUN npm install

# copy complete code
COPY . .

# set env variable
ENV PORT=3000

# expose port
EXPOSE 3000

# health check curl command
HEALTHCHECK --interval=10s --timeout=3s \
  CMD curl -f http://localhost:3000/ || exit 1

# run the program
CMD ["node", "index.js"]
