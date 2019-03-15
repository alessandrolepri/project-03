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

To complete the authentication journey we have decided to integrated a security path for all new users. After registered for the first time a verification email will be sent to your address to very your account.

![Screenshot 2019-03-15 at 14 39 28](https://user-images.githubusercontent.com/42512889/54439178-34b83300-4730-11e9-9707-dcf4d1e61928.png)

We also wanted to implement the authentication journey with the "reset password" path. The user have to provide the email address used when signed up and will receive an email with the link to validate your account and then redirect to the "new password" page.

![Screenshot 2019-03-15 at 14 44 38](https://user-images.githubusercontent.com/42512889/54439533-e22b4680-4730-11e9-9ebe-21e40dd7c425.png)

![Screenshot 2019-03-15 at 14 46 39](https://user-images.githubusercontent.com/42512889/54439691-37675800-4731-11e9-80fb-f4556b7a4d14.png)

Any users can add new city which are managed by administration account but they can post, leave comments and interact with the traveller community.


## Process

The development process started with simple wireframes to workout the basic functionality of the site splitting our task in 2 front-end and 2 back-end.
We then decided what database models and routes would be needed and started working from the backend api of the site by each making models and controllers for every route. Once the api routes had been made, this was tested by making api requests with Insomnia.

With the backend up and running, we moved onto working on the frontend with React.js. Basic components were made for each page and a router was set up in the app.js file. We each took pages and worked on these individually creating the layout and functionality for each page.

Work was carried out on branches of the code depository for each feature. This was merged with the Development branch of the code and any merge conflicts were fixed as a group. Features were tested on the Development branch before being merged with the Master branch.


## Styling

The layout of the site was created based on Desktop-Design principles. Initial mock-up wire frames were made during the planning phase to show the basic functionality of each page and general layout. These were then worked on in more detail during the styling aspect of the build. Semantic UI framework was used to create the structure of the layout. Further styling was added with SCSS.



## Individual inputs / wins

Much of the project's basic structure was created as a group effort through individual tasks. Once the main structure was in place individual features were built out by each project member. The following items were some features for which I took the lead:

* Creating in the backend the Security Route, Register, Login, Auth, Mailer, errorHandler, reset password
* Managed frontend and backend for Authentication form
* Setting up the backend testing with Chai and writing the tests for Register and Login.
* Creating the Seeds file.
* Managed to have a verify account once registered via email and also a reset password link sent out to the email provided if already in our database


### Challenges and Wins
This was the first group project I did while at General Assembly. This introduced new challenges such as the potential to create conflicts when merging code and also maintaining a consistent project vision. We minimised merge conflicts by each working on different features and kept track of who was working on each feature through Trello. Any merge conflicts were resolved as a group.

I was very proud to manage the confirmation link via email, once signed up for the first time and also managed to tackle the reset password form with the verification link via email as well. I have also contributed to writing the test for the backend side using auth.js

This was the first group project I did while at General Assembly. This introduced new challenges such as the potential to create conflicts when merging code and also maintaining a consistent project vision. We minimised merge conflicts by each working on different features and kept track of who was working on each feature through Trello. Any merge conflicts were resolved as a group.



## Future features

There are currently no admin users and Cities must be set within a seeds file.

If we would have had more time, the idea was to improve the user journey by adding some extra features such as a friends request and the user messaging chat to allow them to have a private conversation.

We would like to add the weather icon in the city page which will be connected to the dark sky Api and having two separate page for event and restaurant

Lastly add the search bar to every single continent page to allow user to find the city faster than scrolling up and down to the page.
