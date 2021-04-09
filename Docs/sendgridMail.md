# SendGrid registration and API key

1. Signup for Sendgrid account

    Go [here](https://signup.sendgrid.com/) to register an account.

    Note: If you are behind a VPN, or public / untrusted IP address your account may immediately get banned. There is typically no resolving this with Sendgrid customer support. You may need to create a new email and attempt the account creation from a more trusted IP address.

2. Fill out the info form

    Fill out the personal and company info. If you are doing this for testing purposes you can put your own name as the company name and any domain address you wish. Otherwise, if you will be using this for a real marketing campaign, be sure to put accurate and real info.

3. Verify account

    After you have created an account an email confirmation will be sent. Make sure to open this in the same browser you are currently logged into.


4. Configure a Single Sender

    After your email has been confirmed, you will be redirected back to the Sendgrid account dashboard. You will have two options, Domain Authentication and Single Sender Verification. Select Single Sender Verification.


5. Fill out Single Sender Form

    Fill out the form to create a new "sender". You can add your own name as a company name if you do not have one. If you are using this sender for a real marketing campaign, make sure to provide accurate info.


6. Verify Sender

    After creating your sender, you will get a verification email from Sendgrid. Make sure you are clicking the button in the verification email in the same browser your are logged into. If you don't, the verification will fail.
7. Sender Verified

    After clicking the verification button in the email, you should get the following success message. Make sure you have a green checkmark in the "verified" column, otherwise you will not be able to generate an API key.

8. Start API Key generation

    In the Sendgrid dashboard, there should be a green callout that says "Send your first email.." with a button. Click this "Create An API key" button. You should see two options, Web API and SMTP Relay. Select Web API.

9. Select Node as the Language

10. Get API Key for testing

    In the next screen, you will be prompted to generate a key and name it. Then, you will be presented with a number of steps to complete. Copy the API key that Sendgrid is showing you, this will be the API key that you will need to use for testing. After you have copied the API key somewhere (**you will not be able to access this again**), click the "Next Verify Integration" button.
