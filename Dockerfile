FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Command to run the app in dev mode with hot reload
CMD ["nodemon", "--watch", "src/**/*.ts", "--exec", "node", "--loader", "ts-node/esm", "src/app.ts"]
