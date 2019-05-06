# Check out https://hub.docker.com/_/node to select a new base image(不能使用精简版本缩减images包大小)
FROM node

#LABEL maintainer "278931058@qq.com"

# Set to a non-root built-in user `node`
USER root
# Create app directory (with user `node`)
ENV PROJECT_DIR=/home/my/app
RUN mkdir -p $PROJECT_DIR

WORKDIR $PROJECT_DIR
COPY package.json $PROJECT_DIR
COPY . $PROJECT_DIR


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./


# Bundle app source code
RUN npm -g config set user root

#RUN npm run build(build 前端代码,如果需要的话)
RUN npm install -g cnpm yarn
RUN cd antd&&yarn install
RUN cd antd&&npm run build

RUN cnpm i

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3067

EXPOSE ${PORT}
CMD [ "node", "." ]
