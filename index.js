const express = require('express');
const { appendFileSync } = require('fs');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')) 

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/experience', (req, res) => {
    res.render('experience');
})

app.get('/hobbies', (req, res) => {
    res.render('hobbies');
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT: 3000')
})

