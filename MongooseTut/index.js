// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Ashiyakart', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
  //we're connected....
  // console.log("We are connected sis...")
// });


var kittySchema = new mongoose.Schema({
  name: String
});


kittySchema.methods.speak = function () {
  var greeting = "My name is" + this.name;
  console.log(greeting);
};

var Kitten = mongoose.model('AshiyaKitty', kittySchema);


var AshiyaKitty = new Kitten({ name: 'Ashiya' });
var AshiyaKitty2 = new Kitten({name : 'AshiyaKitty2'});
// console.log(AshiyaKitty.name);
// AshiyaKitty.speak();

AshiyaKitty.save(function (err, AshiyaKitty) {
  if(err) return console.error(err);
  // AshiyaKitty.speak();
});

AshiyaKitty2.save(function (err, a) {
  if(err) return console.error(err);
  // a.speak();
});

Kitten.find ({name:"AshiyaKitty2"},function (err, kittens) {
  if(err) return console.error(err);
  console.log(kittens);
});


