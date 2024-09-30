const express = require('express');
const fs = require('fs');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const path = require('path');
const base64url = require('base64url');
// const open = require('open');

const app = express();
const PORT = 3018;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});
const CREDENTIALS_PATH = path.join(__dirname, '../credentials.json');
const TOKEN_PATH = path.join(__dirname, '../token.json');

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

let oAuth2Client;

// Load OAuth2 credentials from file and authorize
function authorize() {
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
    const { client_secret, client_id, redirect_uris } = credentials.web;
    oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    if (fs.existsSync(TOKEN_PATH)) {
        const token = fs.readFileSync(TOKEN_PATH);
        oAuth2Client.setCredentials(JSON.parse(token));
        return oAuth2Client;
    }
    return null;
}

// Get access token from Google
function getAccessToken(res) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this URL:', authUrl);
    res.redirect(authUrl);
}

// Set up the callback route to handle the OAuth2 callback
app.get('/callback', (req, res) => {
    const code = req.query.code;
    oAuth2Client.getToken(code, (err, token) => {
        if (err) return res.status(400).send('Error retrieving access token');
        oAuth2Client.setCredentials(token);
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
        res.send('Authentication successful! You can now send emails.');

        // Automatically send email after authentication
        const mailresponse= sendEmail(oAuth2Client, data);
        return mailresponse;
    });
});

// Function to send email using Nodemailer and Gmail API
async function sendEmail(auth, data) {

    try {
        const accessToken = await auth.getAccessToken();

        const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

        // Create the email message
        const email = `From:dsdevanshu7@gmail.com\nTo:${data.email}\nSubject: Saying Hello\nDate: ${data.date}
        \nMessage-ID: <1234@local.machine.example>
        \n
        \n email: ${data.email}.
        \n destination: ${data.destination}.
        \n phone: ${data.phone}.
        \n date: ${data.date}.
        \n message: ${data.message}.
        \nSo, \"Hello\".`

        // Encode the email message in base64url format
        const encodedMessage = base64url(email);

        // Create the message object
        const createMessage = {
            raw: encodedMessage,
        };

        // Send the message
        const result = await gmail.users.messages.send({
            userId: 'me',
            resource: createMessage,
        });

        console.log(`Message Id: ${result.data.id}`);
        return result.data;
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Start server and initiate OAuth2 flow
// app.get('/', (req, res) => {
//     const authClient = authorize();
//      console.log(req);


//     if (authClient) {
//         res.send('You are already authenticated. Ready to send email.');
//         sendEmail(authClient);
//     } else {
//         getAccessToken(res);
//     }
// });

function startMail(data) {
    const authClient = authorize();


    if (authClient) {

       const mailresponse= sendEmail(authClient, data);
       return mailresponse;
    } else {
        getAccessToken(res);
    }
}

module.exports = { startMail }


