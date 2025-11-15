# Use Node.js 18 (LTS)
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all deps including devDependencies
RUN npm install

# Install ts-node & typescript globally so .ts can run in Docker
RUN npm install -g ts-node typescript

# Copy all project files
COPY . .

EXPOSE 3000

# Run ts-node directly (same as your package.json)
CMD ["ts-node", "src/app.ts"]
