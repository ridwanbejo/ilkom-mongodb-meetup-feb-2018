How to import json file to our mongodb collection;

mongoimport --db mydb --collection restaurants --drop --file primer-dataset.json

mongoimport --db mydb -u root -p secret12345 --host localhost --port 32769 --collection restaurants --drop --file primer-dataset.json

mongoimport --db therapy -u sense-therapy -p secret12345 --host 192.168.99.100 --port 32773 --collection restaurants --drop --file primer-dataset.json