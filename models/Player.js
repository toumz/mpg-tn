var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PlayerSchema = new mongoose.Schema({
    name: String,
    team: String,
    position: String,
    but: Number,
    passe_d: Number,
    minutes: Number,
    age: String,
    market_value: { type: Number, default: 1 },
    updated_date: { type: Date, default: Date.now },
    
  });

module.exports = mongoose.model('Player', PlayerSchema);