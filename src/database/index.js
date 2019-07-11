const mongoose = require('mongoose');

const host = 'localhost';

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://'+host+'/auth',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;