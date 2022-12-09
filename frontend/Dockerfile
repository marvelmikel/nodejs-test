# create development
FROM node:14.18.1
# define work director
WORKDIR /frontend
# copy package json
COPY package.json ./
# copy all file
COPY . .
# run yarn
RUN npm install
# expose port
EXPOSE 3000

ENV NEXT_HOST=0.0.0.0
ENV NEXT_PORT=3000






