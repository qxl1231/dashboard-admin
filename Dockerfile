# Check out https://hub.docker.com/_/node to select a new base image(不能使用精简版本缩减images包大小)
FROM node

# Set to a non-root built-in user `node`
USER node
USER root
# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./


# Bundle app source code
COPY . /home/node/app
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
