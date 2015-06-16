var mongoose = require('mongoose');

var PieceSchema = new mongoose.Schema({
  title: String,
  img_url: String,
  description: String,
  updated_at: { type: Date, default: Date.now },
});

var Piece = mongoose.model('Piece', PieceSchema);

module.exports = mongoose.model('Piece', PieceSchema);