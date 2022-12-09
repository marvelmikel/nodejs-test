# create development
FROM node:14.18.1
# define work director
WORKDIR /backend
# copy package json
COPY package.json ./
# install packages
RUN npm install 
# copy all file
COPY . .
# expose port
EXPOSE 5000