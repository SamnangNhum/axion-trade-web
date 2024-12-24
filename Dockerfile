# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Set environment variables at build time
ARG NEXT_APP_API_URL
ARG NEXT_APP_IMAGE_HOST

# Pass build-time environment variables to the Next.js config
ENV NEXT_APP_API_URL=$NEXT_APP_API_URL
ENV NEXT_APP_IMAGE_HOST=$NEXT_APP_IMAGE_HOST

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:18-alpine

WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/public /app/public

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
