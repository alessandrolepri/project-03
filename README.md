# General Assembly Project 3: City Spot

Live version: https://project-3-alexlepri.herokuapp.com/


### Timeframe
7 Days

## Technologies Used
* React.js
* Javascript(ES6)
* Node.js
* MongoDB
* Express
* Webpack
* Mocha, Chai, Supertest
* Axios
* SCSS/CSS
* Babel
* Semantic UI
* HTML5
* Git/Github
* Heroku
* Nodemailer
* Bcrypt and Session Auth
* jwt
* Bluebird

#### APIs:
* Filestack
* Dark Sky
* Skiddle
* Zomato
* Open Cage


## Contributors
A group project of 4 members [Joshua King](https://github.com/joshuaking06), [Bete Yemane](https://github.com/beteyemane), [Lauren Bell](https://github.com/lozlette).
The project was managed using Trello and daily stand-ups.

## Our Application - City-Spot

A hosted version of this app can be found at [Project-3, City Spot](https://github.com/alessandrolepri/project-03)

### Project Summary

![screenshot 2019-02-23 at 12 33 26](https://user-images.githubusercontent.com/42512889/53286492-5fcde900-3767-11e9-80ca-139ff0cd8fad.png)

City Spot is a web application where users can sign up and post images from their travels. The users can navigate to the city they visited to share their adventures with other travellers.


# Users Journey

When the user first visits City Spot, they have two paths to reach their desired city: the search bar where they can search for a city, or the links that takes them to each continent where they can select a city.

![screenshot 2019-02-23 at 12 35 31](https://user-images.githubusercontent.com/42512889/53286501-8724b600-3767-11e9-9036-22c84fdf7e55.png)

Once on a city's page, users can view information about that city, posts made by other users and a link to view event and restaurant recommendations.

![screenshot 2019-02-23 at 12 39 11](https://user-images.githubusercontent.com/42512889/53286535-35c8f680-3768-11e9-901c-e245dcafb011.png)

Users can also like and comment on the posts made by other users. Posts with high amounts of likes will be added to the popular posts page and will be able to like the posts they see on that page.

If a user would like to add a post they will have to register and login, and if the user has forgotten their password they can request an email with the link to change their password.

![screenshot 2019-02-23 at 12 41 58](https://user-images.githubusercontent.com/42512889/53286553-70cb2a00-3768-11e9-9bcf-8209884e7467.png) ![screenshot 2019-02-23 at 12 42 06](https://user-images.githubusercontent.com/42512889/53286556-71fc5700-3768-11e9-9590-ee7f874260fb.png)

The user has a profile page which contains their uploaded profile image, bio, a cover photo and their posts. They are also able to edit their bio and cover photo image.


## Process

The development process started with simple wireframes to workout the basic functionality of the site splitting our task in 2 front-end and 2 back-end.
We then decided what database models and routes would be needed and started working from the backend api of the site by each making models and controllers for every route. Once the api routes had been made, this was tested by making api requests with Insomnia.

With the backend up and running, we moved onto working on the frontend with React.js. Basic components were made for each page and a router was set up in the app.js file. We each took pages and worked on these individually creating the layout and functionality for each page.

Work was carried out on branches of the code depository for each feature. This was merged with the Development branch of the code and any merge conflicts were fixed as a group. Features were tested on the Development branch before being merged with the Master branch.




<!-- # Backend setup

The started on the backend by creating three models: City, Continent, and User.

-routes
-error handling
-testing
-register and login
-external API requests -->

# Frontend setup

-setting up components and pages
-setting up forms
-connecting API requests to the front end.

# Styling

-semantic UI
-CSS

# Features

-likes
-comment
-posts
-email system
-view post by likes(popular post page)

## Individual inputs / wins
Much of the project's basic structure was created as a group effort through pair coding. Once the main structure was in place individual features were built out by each project member. The following items were some features for which I took the lead:


* Creating in the backend the Security Route, Register, Login, Auth, Mailer, errorHandler, reset password
* Managed frontend and backend for Authentication form
* Setting up the backend testing with Chai and writing the tests for Register and Login.
* Creating the Seeds file.
* Managed to have a verify account once registered via email and also a reset password link sent out to the email provided if already in our database

### Challenges and Wins
This was the first group project I did while at General Assembly. This introduced new challenges such as the potential to create conflicts when merging code and also maintaining a consistent project vision. We minimised merge conflicts by each working on different features and kept track of who was working on each feature through Trello. Any merge conflicts were resolved as a group.
I found the email system very challenging especially when working with the verification account to be sent to the email address provided while registering and then also the reset password link that generated and random code sent your email address to reset you password.

Challenges:

-references
-populating

Wins:
-bringing in the APIs.

## Future features

-admin accounts to add new cities
-user messaging
-friend requests
-weather icons on city page separate event and restaurant pages
-continent page with search bar
