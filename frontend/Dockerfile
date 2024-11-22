FROM caddy:2.9-alpine

# Clean default Caddy config
RUN rm /etc/caddy/Caddyfile
RUN rm -rf /usr/share/caddy

# Copy the static files into Caddy's default public directory
COPY build /usr/share/caddy

# Copy the custom Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose HTTP traffic
EXPOSE 80

# Start Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]