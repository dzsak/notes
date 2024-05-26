# notes

### Description

This project is a personal practice Todo application with multi-user handling, aimed at enhancing my programming skills. It features a Node.js backend using MongoDB and Express. A React frontend using Vite, TailwindCSS, serving as a hands-on learning experience in full-stack web development.

You need to just put your google client id and secret in env file.

```
GOOGLE_CLIENT_ID = XXXXXXXXXX
GOOGLE_CLIENT_SECRET = XXXXXXXXXXXXXXXX
REDIRECT_URI = 'http://localhost:3000/auth/google/callback'
```

Also need to put an env file with firebase api key to the web folder.

```
VITE_FIREBASE_API_KEY="<firebase_api_key>"
```

### Start local server

To start our app for testing/developer just simply type the following command in the command line:

```javascript
make build-web
node server/server.js
```

### Notes

This project is primarily for my personal practice and learning. Feel free to explore and provide feedback if you wish.

### Future Plans

Here are some ideas and features I plan to implement as I continue working on this project:

- [ ] Formik for forms
- [ ] Dockerize
- [ ] Github actions (test, build, publish)
- [ ] Notifications on frontend
- [ ] Message board on forntend
- [ ] Chat on frontend
- [ ] Implement in React Native
