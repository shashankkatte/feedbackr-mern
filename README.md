
# FeedbackR
![ViewCount](https://views.whatilearened.today/views/github/shashankkatte/feedbackr-mern.svg)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-welcome-success.svg?style=flat-square)](./CONTRIBUTING.md)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](https://www.firsttimersonly.com/)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20Open-Source%20project%20MERN%20stack.%20By%20@shashankkatte&url=https://github.com/shashankkatte/feedbackr-mern&hashtags=100DaysofCode 'Tweet this project')
![Feedbackr](Feedbackr-banner.png)

Feedbackr is an Opensource and free survey app. :memo:. Use it as a starter app to build your own custom feedback collection App or use it as your reference to explore a production ready MERN App. This is an evolving app, contributions are welcome! Learn how to contribute to this repo [here](./CONTRIBUTING.md)

## Getting started

Please follow these instruction in the order presented for a smooth setup process. since this app relies on many other third party dependencies, it is essential that we get this right.

### Clone/Fork source code and install dependencies

 1. Clone the repo using `git clone https://github.com/shashankkatte/feedbackr-mern.git` or if using ssh `git@github.com:shashankkatte/feedbackr-mern.git`

 2. Navigate into the root folder `cd feedbackr-mern` and run `npm install` this installs all the npm dependencies for our servir side of the project.

 3. Next navigate into the client directory `cd feedbackr-mern/client` and run  `npm install` to install dependencies for React App

### Getting necessary third-party API keys

we use a few third party services and dependencies here's how to set them up, yes everything is FREE!

1. Create a google project and get a OAuth API key [here](Docs/googleAuth.md)

2. Register for account at [MongoDB Atlas](Docs/mongoAtlas.md)

## Concepts covered

### Express App creation

- Generating express Apps

- Express route handlers

- Configuring and Heroku deploymenta nd subsequent deployments

### Authentication with google OAuth

- Using Passport.js an setup

- google project setup

- securing API keys

- Google strategy options

- Testing OAuth

- Authorized Redirect URIs

- OAuth Callbacks

- Access and refresh tokens

- serialize and deserialize user

- Enabling cookies

### Working with MondoDB using mongoose

- Wiring up mongoose

- Using MongoDB atlas free instance

- Mongoose query

### Heroku

- Setting env variables

- Mongo db uri key has to be `MONGODB_URI` for Heroku! wierd but yes!

### Create react App

- Wiring up redux and reducers from scratch

- Wiring and using React router with exact keyword

- Routes and always visible components.

- Using Link tags from React router

### Styling with Materialize css

- Using webpack to import css
