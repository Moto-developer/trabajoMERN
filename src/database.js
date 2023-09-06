const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1/mern-tasks';

mongoose.connect(URI)
    .then(db => console.log('La base datos está conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;