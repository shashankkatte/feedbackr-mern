# Setting Up Ngrok

We can use npx to run ngrok and have it forward traffic to port 5000 without installing anything. To do this, open a brand new terminal and run:

`npx ngrok http 5000`

This will launch up a pop-up window with the address you can use:


> example : `https://ed3ce60.ngrok.io` will only exist for 2 hours. 

You'll want to keep this terminal session open and running while you are developing. If you close the running ngrok session and re-run npx ngrok http 5000, the address will be different. It is important to remember these two things as you will likely need to update the ngrok generated address in your Sendgrid dashboard a few times through the development process.

## Sendgrid Integration

 1. Login to sendgrid

 2. click setting on the left hand navigation

 3. click mail settings

 4. click Event webhook

 5. In the HTTP post URL paste the link `https:<your ngrok link>/api/surveys/webhooks`. For production env you will replace this with heroku / your domain link.

 > Once you have this link, click test your integration button.
