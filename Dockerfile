
FROM php:8.0-apache


RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y postfix mailutils && \
    rm -rf /var/lib/apt/lists/* && \
    echo "postfix postfix/main_mailer_type string Internet site" | debconf-set-selections && \
    echo "postfix postfix/mailname string yourdomain.com" | debconf-set-selections && \
    echo "postfix postfix/destinations string yourdomain.com, localhost.localdomain, localhost" | debconf-set-selections && \
    service postfix start


COPY . /var/www/html/


RUN chown -R www-data:www-data /var/www/html


EXPOSE 80


CMD ["apache2-foreground"]