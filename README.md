9GAG 2.0

<h2>Dependencies</h2>

* System dependencies
    - NPM
    - Nodejs
    - Postgresql
    - Docker + Docker compose
* Project dependencies: Install all npm dependendies with
``` bash
npm install
```

<h2>Database</h2>

* Create db, user based on the env vars in the deploy bash script (or docker files):
    * Run
        ``` bash
        sudo -u postgres psql
        ```
    * Create a database
        ``` bash
        create database newgag;
        ```
    * Create user and grant admin privileges over the db
        ``` bash
            create user gag with password 'gag';
            grant all privileges on database gag to gag;
        ```
    
<h2> Running the server </h2>

* Navigate to the backend directory and run:
```bash
    bash deploy.sh
```
* When docker is working the system will be deployed by running:
```
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml -p dev up --build
```



