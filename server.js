const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

app.get('/', (req, res) => {
    res.render('index', { title: 'Bluetify' });
});

app.get('/install', (req, res) => {
    res.redirect('https://github.com/Bluetify');
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));