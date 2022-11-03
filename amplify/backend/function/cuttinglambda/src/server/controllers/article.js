const Article = require("../models/article");

module.exports = {
  create(req, res) {
    return Article.create({
      sku: req.body.sku,
      depth: req.body.depth,
      width: req.body.width,
      height: req.body.height,
      pictureUrl: req.body.pictureUrl,
      materialType: req.body.materialType
    })
      .then(item =>
        res
          .status(201)
          .send({
            success: true,
            message: "Successfully created an article entity.",
            item
          })
      )
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Article.findAll()
      .then(items => res.status(200).send(items))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    // Use findAll() with where to use our own specified ID
    /*
        return Item.findAll({
      where: {
        item_id: req.params.itemId
      }
    })
    */
    return Article.findByPk(req.params.articleId)
      .then(item => {
        if (!item) {
          return res.status(404).send({
            message: "article Not Found"
          });
        }
        return res.status(200).send(item);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Article.findByPk(req.params.articleId)
      .then(item => {
        if (!item) {
          return res.status(404).send({
            message: "article Not Found"
          });
        }
        return item
          .update(req.body)
          .then(() => res.status(200).send(item))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return Article.findByPk(req.params.articleId)
      .then(item => {
        if (!item) {
          return res.status(400).send({
            message: "article Not Found"
          });
        }
        return item
          .destroy()
          .then(() =>
            res.status(204).send({ message: "Successfully deleted the article!" })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};