# Use official Nginx image
FROM nginx:alpine

# Copy website files to container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
