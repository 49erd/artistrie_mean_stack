var mongoose = require('mongoose');

var PieceSchema = new mongoose.Schema({
  title: String,
  img_url: String,
  description: String,
  updated_at: { type: Date, default: Date.now },
});

var Piece = mongoose.model('Piece', PieceSchema);

Piece.create({title: 'Kitties!!', img_url: 'http://files.gamebanana.com/img/ico/sprays/kitten2_render.png', description: 'this is a kitty picture!!'}, function(err, piece){
    if(err) console.log(err);
    else console.log(piece);
});

module.exports = mongoose.model('Piece', PieceSchema);