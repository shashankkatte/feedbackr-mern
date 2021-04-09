# Google project setup and getting API key

1. [Go to the Google Project Dashboard](https://console.cloud.google.com)

2. Click the "Create Project" button

3. Name the project and click the "Create" button

4. Click the menu button, Select "APIs & Services", then "OAuth Consent Screen"

5. Select "External" and click the "Create" button

6. Fill out "Application Name", scroll to the bottom and click the "Save" button. No other info should be filled out in the consent screen at this time.

7. Click "Credentials" in the sidebar and then click the "Create Credentials" button

8. Select "OAuth Client ID"

9. Select Web Application and fill out the "Authorized JavaScript Origins" and "Authorized redirect URI" and click the "Create" button. 

    Authorized JavaScript Origins: `http://localhost:5000`

    Authorized redirect URI `http://localhost:5000/auth/google/callback`


    Note! Google has made a number of changes to the OAuth credential's restrictions, and no longer allows wildcards in the redirect URI field. If you follow along with the upcoming video lecture you will get this error: Invalid Redirect: cannot contain a wildcard (*)

    Since the main goal of using `http://localhost:5000/*` was to show the redirect error a few lectures later, we entered the correct redirect as shown above since this is what it will be changed to anyway.

10. Copy your Client ID and Client Secret in a safe place which will be used in dev config later.

