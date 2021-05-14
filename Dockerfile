FROM node:10-alpine
WORKDIR /usr/src/service
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3333
CMD ["npm", "run", "start"]
