# notes

### Description

This project is a personal practice Todo application with multi-user handling, aimed at enhancing my programming skills. It features a Node.js backend using MongoDB and Express. A React frontend using Vite, TailwindCSS, serving as a hands-on learning experience in full-stack web development.

You need to generate a jwt secret, get the mongo connection string url and put in the env file in the root folder of the project.
Also need to put a firebase api key.

```
JWT_SECRET = '<openssl rand -base64 24>'
MONGO = "mongo-db-connection-string-url"
VITE_FIREBASE_API_KEY="<firebase_api_key>"
```

### Start local server

To start our app for testing/developer just simply type the following command in the command line:

```bash
npm run build && node server/server.js
```

### Docker

Run app using Docker.

```bash
docker build -t notes .
```

```bash
docker run --name notes \
-e JWT_SECRET='<openssl rand -base64 24>' \
-e MONGO='mongo-db-connection-string-url' \
-e VITE_FIREBASE_API_KEY='<firebase_api_key>' \
-p 3000:3000 \
notes
```

### Notes

This project is primarily for my personal practice and learning. Feel free to explore and provide feedback if you wish.

### Future Plans

Here are some ideas and features I plan to implement as I continue working on this project:

- [x] Dockerize
- [ ] Github actions (test, build, publish)
- [ ] Formik for forms
- [ ] Notifications on frontend
- [ ] Message board on forntend
- [ ] Chat on frontend
- [ ] Typescript
- [ ] Implement in React Native
