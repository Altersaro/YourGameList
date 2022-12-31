#!/usr/bin/env bash

/usr/bin/php /var/www/html/artisan migrate --force > .fly/scripts/db.sh
/usr/bin/php /var/www/html/artisan migrate:rollback --force > .fly/scripts/db.sh
/usr/bin/php /var/www/html/artisan route:list > .fly/scripts/db.sh
/usr/bin/php /var/www/html/artisan route:clear > .fly/scripts/db.sh



/usr/bin/php /var/www/html/artisan config:cache --no-ansi -q
/usr/bin/php /var/www/html/artisan route:cache --no-ansi -q
/usr/bin/php /var/www/html/artisan view:cache --no-ansi -q

