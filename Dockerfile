# Use official PHP image with Apache
FROM php:8.1-apache

# Set working directory
WORKDIR /var/www/html

# Install required PHP extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Copy application files
COPY . .

# Copy custom Apache config
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

# Set permissions
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html

# Expose port 80 (Apache runs on this)
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD php -r "file_get_contents('http://localhost/api/health');" || exit 1

# Start Apache in foreground
CMD ["apache2-foreground"]
