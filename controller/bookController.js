const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((model) => res.json(model))
      .catch((err) => res.json(err));
  },
};
