# Setting up MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas and click the "Start Free" button (or Sign In if you already have account)

2. Create your MongoDB user account

3. After creating your account, you will be prompted to create your first cluster.

    Leave all free tier options selected - AWS, North America: N. Virginia etc.

4. Scroll down on this page to name your app:

5. Click the "Create Cluster" button:

6. The cluster will take a few minutes or more to generate, eventually you will see a page updated.

7. Click the "CONNECT" button in your cluster's sandbox.  You will get the a screen asking you to whitelist your address.

    Click the "Add your Current IP Address" button.

8. You will then need to create a database user and password - I would highly suggest using the "Autogenerate" button to avoid escaping issues.

    After doing so, click the "Create MongoDB User" button.

9. After creating the user, you should get this success dialog box. Click the "Choose a connection method" button.

10. Select "Connect Your Application"

11. Copy the address under "Connection String Only"

    When you paste this string into the application, you will need to replace `<username>` and `<password>` with the actual info created earlier and swap out the `<dbname>` placeholder with any arbitrary name.

    Click the "Close" button and head back over to your Emaily application.

12. In your `config/keys.js` file create the `mongoURI key-value` pair if you haven't already done so. (You will learn how to create a config file in main README.md file getting started section)

    Add the connection string by pasting the entire SRV address string you copied in the screen before.

    Remember to replace `<username>` with the user's actual username.

    Remember to replace `<password>` with the user's actual password.

    Remember to replace `<dbname>` with any name you'd like.

    `mongoURI: 'COPY_THE_SRV_ADDRESS_STRING_HERE'`

    example:

    `mongoURI: 'mongodb+srv://p00gz:0JYnugifgjsP9UD6@emaily-uwsj6.mongodb.net/test?retryWrites=true'`

    Your root index.js connect function should still look like this:

    mongoose.connect(keys.mongoURI);

    Restart your Node server if you have not already done so.

13. Once you succesfully run the applications you will see collections and records created in MongoDB.

    To see these results, navigate back to your cluster's dashboard and click the 'emaily' project link:

14. Select the 'Collections' tab:

15. You should see the collection of users and user objects that have successfully authenticated to your app:
