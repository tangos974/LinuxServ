FROM alpine:latest

# Install a lightweight HTTP server
RUN apk add --no-cache busybox-extras

# Copy static files to the web root
COPY build /www

# Rename app.html to index.html to serve it as the root
RUN mv /www/app.html /www/index.html

# Expose the port for the HTTP server
EXPOSE 80

# Command to serve the files using busybox HTTP server
CMD ["httpd", "-f", "-h", "/www", "-p", "80"]