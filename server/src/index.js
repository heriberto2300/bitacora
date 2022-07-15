const express = require('express');
const app = express();
const home = require('./routes/home');
const auth = require('./routes/auth');
const courses = require('./routes/courses');
const profile = require('./routes/profile');

app.use(home);
app.use(auth);
app.use(courses);
app.use(profile);

app.get('/', (req, res) => {
    res.send("Pantalla de bienvenida");
});


app.listen(8000, () => console.log("Listening on port 8000"));

