# Use official Node.js image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Initialize a new Node.js project inside the container
RUN npm init -y

# Install TypeScript, Express, and Type Definitions
RUN npm install express @types/express typescript ts-node

# Create a tsconfig.json with esModuleInterop enabled
RUN echo '{ \
  "compilerOptions": { \
    "outDir": "./dist", \
    "module": "CommonJS", \
    "target": "ES6", \
    "strict": true, \
    "esModuleInterop": true \
  } \
}' > tsconfig.json

# Copy the application source code
COPY . .

# Compile TypeScript
RUN npx tsc

# Expose port 3000 for the app
EXPOSE 3000

# Run the server using the compiled JS file
CMD ["node", "dist/index.js"]
