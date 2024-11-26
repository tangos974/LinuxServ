FROM alpine:latest

# Set working directory
WORKDIR /app

# Install npm
RUN apk add --no-cache npm

# Copy the entire project directory
COPY . .

# Expose Vite's default development server port
EXPOSE 5173

# Use the development server command
CMD ["npm", "run", "dev", "--", "--port", "5173", "--host", "0.0.0.0"]
