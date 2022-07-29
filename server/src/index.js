const express = require('express');
const app = express();

const home = require('./routes/home');
const login = require('./routes/login');
const register = require('./routes/register');
const courses = require('./routes/courses');
const profile = require('./routes/profile');

const test = require('./routes/testRoute');

app.use(home);
app.use(login);
app.use(register);
app.use(courses);
app.use(profile);
app.use('/test', test);

app.get('/', (req, res) => {
    res.send("Pantalla de bienvenida");
});



app.listen(8000, () => console.log("Listening on port 8000"));

