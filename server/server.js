require('dotenv').config()
const express = require('express')
const axios = require('axios');
const app = express()
const port = process.env.PORT || 3000;

const logger = function(req, res, next) {
  console.log(req.method + ' ' +req.url + ' ' + new Date());
  next();
}
app.use(logger)
app.use(express.static('web/build'))

// Initiates the Google Login flow
app.get('/auth/google', (req, res) => {
  const clientId = process.env.CLIENT_ID
  const redirectUri = process.env.REDIRECT_URI
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=profile email`;
  res.redirect(url);
});

// Callback URL for handling the Google Login response
app.get('/auth/google/callback', async (req, res) => {
  const { code } = req.query;
  const clientId = process.env.CLIENT_ID
  const clientSecret = process.env.CLIENT_SECRET
  const redirectUri = process.env.REDIRECT_URI

  try {
    // Exchange authorization code for access token
    const { data } = await axios.post('https://oauth2.googleapis.com/token', {
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    });

    const { access_token, id_token } = data;

    // Use access_token or id_token to fetch user profile
    const { data: profile } = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    // Code to handle user authentication and retrieval using the profile data

    res.redirect('/');
  } catch (error) {
    console.error('Error:', error.response.data.error);
    res.redirect('/login');
  }
});

// Logout route
app.get('/logout', (req, res) => {
  // Code to handle user logout
  res.redirect('/login');
});

app.get('/api/data', (req, res) => {
  res.send('{"data": "data"}')
})

app.post('/api/data', (req, res) => {
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
