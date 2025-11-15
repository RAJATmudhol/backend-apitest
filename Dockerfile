FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Install all deps including devDependencies
RUN npm install

# Install ts-node & typescript globally so .ts can run in Docker
RUN npm install -g ts-node typescript

COPY . .

EXPOSE 3000

# Run ts-node directly (same as your package.json)
CMD ["ts-node", "src/app.ts"]
git add Dockerfile
git commit -m "fix dockerfile for ts-node runtime"
git push
