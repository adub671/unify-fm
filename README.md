## About

unify.fm is an internet radio station aggregator made for music lovers with the goal of being user friendly and easy to control.
Here you can easily navigate through your favorite radio stations and discover new ones. The now playing information is also grabbed so you can see all show that are now playing.
This is a project made by Andrew Wilkinson for the niche community of internet radio listeners.

Visit unify-fm.onrender.com for a live demo

## Getting started

1. Clone this repository (only this branch)

2. Install dependencies

   ```bash
   pipenv install -r requirements.txt
   ```

3. Create a **.env** file based on **.env.example** for your
   development environment

4. Get into your pipenv, migrate your database, seed your database, and run your Flask app with the following commands:

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

5. Change directory to "react-app" and install packages then run start

   ```bash
   npm install
   ```

   ```bash
   npm start
   ```

6. App is ready to use! Enjoy! Happy Listening :)

## Documentation

[DataBase Diagram](https://github.com/adub671/unify-fm/wiki/DB-Diagram)
[Feature List](https://github.com/adub671/unify-fm/wiki/Feature-List)
[User Stories](https://github.com/adub671/unify-fm/wiki/User-Stories)
