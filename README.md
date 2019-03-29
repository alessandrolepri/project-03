# General Assembly Project 3: City Spot

Live version: https://project-3-alexlepri.herokuapp.com/

## Project Brief

The brief was to build a MERN stack application in a group and to have automated tests for at least one RESTful resource on the back-end.


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

![Screenshot 2019-03-29 at 15 39 20](https://user-images.githubusercontent.com/42512889/55244336-ec713880-5238-11e9-85df-321e2935dfab.png)


City Spot is a social platform for travellers to showcase their recent trips. This is done by generating a 'post' on a city's show page, which includes:

* an uploaded image
* a brief summary of their experience/caption relating to their image

To increase interactivity amongst the travellers, users can also:

* add a comment to the post
* 'like' the post

10 posts with highest amounts of likes in the database will be featured on a popular posts page, where they are sorted by the amount of likes in descending order. The number of 'likes' are added on the post to visually display this popularity ranking on the page. Users are also able to 'like' the posts they see on that page, and will be navigated to the city's show page when they click on the post.

As well as the posts, the city show pages also includes general city information such as population and region, event and restaurant recommendations, a youtube video of the city and a weekly weather forcast.

This was a tool for users to find out information on cities they're planning to go to in the future.


# Users Journey

When the user first visits City Spot, they have two paths to reach their desired city: a search bar, and links to each continent where they can select a city.

![Screenshot 2019-03-29 at 15 41 52](https://user-images.githubusercontent.com/42512889/55244490-32c69780-5239-11e9-8b03-6c151410e996.png)


The city show pages

![Screenshot 2019-03-29 at 15 42 42](https://user-images.githubusercontent.com/42512889/55244589-60134580-5239-11e9-8a63-e3329abb4170.png)


A post on the city

![Screenshot 2019-03-29 at 15 42 51](https://user-images.githubusercontent.com/42512889/55244597-61dd0900-5239-11e9-8d43-09c9fe018b15.png)

The user has a profile page which contains their uploaded profile image, bio, a cover photo and their posts. They are also able to edit their bio and cover photo image.

<!-- When the user first visits City Spot, they have two paths to reach their desired city: the search bar where they can search for a city, or the links that takes them to each continent where they can select a city.

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

Any users can add new city which are managed by administration account but they can post, leave comments and interact with the traveller community. -->


## Process

### Development

Planning was an integral part the process as our focus was to produce a backend API which could coherently work in the React front-end. We first began creating wireframes to work out this structure and general content placement of the website. It was clear our application would revolve around three elements: User, City and Continent and we established early on that posts will be added to a city's page by a user.

### Backend

We firstly began to develop our backend API using MongoDB, and created three of our main Mongoose models; City, Continent, and User. As the the cities are within a continent category, a 'cities' virtual schema was made.

```
continentSchema.virtual('cities', {
  ref: 'City',
  localField: '_id',
  foreignField: 'continent'
})
```
To begin the database, we created a seeds file to add the data for all the Continents and a handful of Cities, which served two purposes: to create routes in the back-end which allowed the front-end to work with the data and as a visual tool, to help populate data when making adjustments to our API, using Insomnia as our client.

### Authentication

In order to carry out the authentication process, we used BCrypt to hash passwords in the backend and store it in the database so that BCrypt could compare it against the password given when logging in. We also used JSON Web Token to embed JSON into an encrypted token. This was incorporated in our login and register controller and is sent to the client when the users successfully authenticate.

Upon registering, we used Nodemailer to send an email to the users email which includes a link to verify the email they have registered with. The users are notified on the front-end by a flash message. To experiment with Nodemailer and BCrypt even further, we also added a reset password option for users who have forgotten their password. The link navigates to a route where they input a new password which is undergoes the same backend process as the initial password setup.

```
handleSubmit(e){
  e.preventDefault()
  axios.post('/api/register', this.state.postData)
    .then(() => {
      Flash.setMessage('success', 'Please check your email address to verify your account' )
      this.props.history.push('/login')
    })
    .catch(err => this.setState({ errors: err.response.data }))
}
```
```
function passwordReset( req, res, next ) {
  User.findOne({ email: req.body.email, verified: true })
    .then(user => {
      if(!user) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      // user has been found
      // send an email
      mailer.sendResetPassword(user)
    })
    .then(() => res.json({ message: 'Email has been succesfully sent to your address'}))
    .catch(next)
}
```

### Frontend

Frontend setup:

* setting up components and pages
* setting up forms
* connecting API requests to the front end.


## Task Management and Communication

Being in a team of four, we decided the easiest way to divide the workload was to have two people build the front-end, and two people build the back-end. We held stand-ups every morning and communicated via Slack to update each other with our progress.

<!-- The development process started with simple wireframes to workout the basic functionality of the site splitting our task in 2 front-end and 2 back-end.
We then decided what database models and routes would be needed and started working from the backend api of the site by each making models and controllers for every route. Once the api routes had been made, this was tested by making api requests with Insomnia.

With the backend up and running, we moved onto working on the frontend with React.js. Basic components were made for each page and a router was set up in the app.js file. We each took pages and worked on these individually creating the layout and functionality for each page.

Work was carried out on branches of the code depository for each feature. This was merged with the Development branch of the code and any merge conflicts were fixed as a group. Features were tested on the Development branch before being merged with the Master branch. -->


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

* Currently, the only way to add new Cities is via our seeds file, so an admin account to add the cities will be a useful feature to add.

* To follow the conventions of a social media platform, and for users to engage with each other to have a sense of community, I'd like to implement user messaging & friend requests.

* A search bar for the Continent and City pages to improve user navigation.
