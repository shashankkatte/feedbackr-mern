
# FeedbackR

![ViewCount](https://views.whatilearened.today/views/github/shashankkatte/feedbackr-mern.svg)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-welcome-success.svg?style=flat-square)](./CONTRIBUTING.md)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](https://www.firsttimersonly.com/)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20Open-Source%20project%20MERN%20stack.%20By%20@shashankkatte&url=https://github.com/shashankkatte/feedbackr-mern&hashtags=100DaysofCode 'Tweet this project')
![Feedbackr](Feedbackr-banner.png)
Feedbackr is an Opensource and free survey app. :memo:. Use it as a starter app to build your own custom feedback collection App or use it as your reference to explore a production ready MERN App.

If you are exploring MERN stack, this app will show you:

- how to use **React and Redux**

- Routing with **React routing**

- Using reusable **Redux Forms**

- Payments with **Stripe**

- **Google OAuth Authentication** with **Passport.js**

- Persisting data into **MongoDB** and using **Mongoose**

- Using **webhooks** 

- Sending Automated **Emails**

- **API key handling techniques** and  Deployment strategy with configs to **Heroku**

contributions are welcome! Learn how to contribute to this repo [here](./CONTRIBUTING.md)


:globe_with_meridians:[Live link](https://feedbakr-mern.herokuapp.com/) 
> use `4242 4242 4242 4242` as sample credit card

## Getting started

Please follow these instruction in the order presented for a smooth setup process. since this app relies on many other third party dependencies, it is essential that we get this right.

### Clone/Fork source code and install dependencies

 1. Clone the repo using 

    `git clone https://github.com/shashankkatte/feedbackr-mern.git` 

    or if using ssh

    `git clone git@github.com:shashankkatte/feedbackr-mern.git`

 2. Navigate into the root folder 
 
    `cd feedbackr-mern` and run `npm install` 
    
    this installs all the npm dependencies for our servir side of the project.

 3. Next navigate into the client directory 
 `cd feedbackr-mern/client` 
 
    and run  `npm install`
  to install dependencies for React App

### Getting necessary third-party API keys

we use a few third party services and dependencies here's how to set them up, yes everything is FREE!

1. Create a google project and get a OAuth API key [here](Docs/googleAuth.md)

2. Register for account at [MongoDB Atlas](Docs/mongoAtlas.md)

3. Register for Stripe payments [here](https://stripe.com). Once you login, on the left hand navigation click developers and then API Keys. Next Next click create a secret key. You will need these keys for later in cofig keys.

4. Register for SendGrid and get API Key [here](Docs/sendgridMail.md)

5. Configure ngrok for local tunneling [here](Docs/ngrok.md)

### Create local Dev config file

1. under the `config` folder create a new file `dev.js` and add the following keys, Make sure you substitute the key values to your own values

```javascript
    // Dev.js dont commit to git
module.exports = {
    googleClientID:
      '<Your GoogleAPI KEY>',
    googleClientSecret: '<Your google client API KEY>',
    mongoURI:
      '<Your DEV MngoDB URI>',
      cookieKey: '<Just some random characters>',
      stripePublishableKey: '<Your Stripe publishable key>',
      stripeSecretKey:'<Your stripe secret key>',
      sendGridKey:'<Your sendgrid key>',
      redirectDomain: 'http://localhost:3000'
  };
```

### Run the App

Open your terminal navigate to the project directory and run

`npm run dev`

## Deploying to Production

:globe_with_meridians:[Live link](https://feedbakr-mern.herokuapp.com/)

This App is originally deployed on Heroku, For production configuration files refer to `config/prod.js` for the necessary keys and replace the values with your production environment variables.

## :pray: Credits and Acknowledgements

This App draws inspirations from many publicly available resources and tutorials on MERN stack.

Special thanks and mention to some great online instructors : [Brad Travesy](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA) | [maximilian schwarzmüller](https://academind.com/) | [Stephen Grider](https://twitter.com/ste_grider?lang=en) and many many more...
