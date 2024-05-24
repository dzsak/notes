# notes

### Description

This project is a personal practice Todo application with multi-user handling, aimed at enhancing my programming skills. It features a Node.js backend and a React frontend, serving as a hands-on learning experience in full-stack web development.

You need to just put your google client id and secret in env file.

```
GOOGLE_CLIENT_ID = XXXXXXXXXX
GOOGLE_CLIENT_SECRET = XXXXXXXXXXXXXXXX
REDIRECT_URI = 'http://localhost:3000/auth/google/callback'
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

- [ ] Dockerize
- [ ] Github actions (test, build, publish)
- [ ] Notifications on frontend
- [ ] Message board on forntend
- [ ] Live chat on frontend
- [ ] Implement in React Native
