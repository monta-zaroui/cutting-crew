const MaterialType = require("../models").MaterialType;

module.exports = {
  create(req, res) {
    return MaterialType.create({
      materialType: req.body.materialType,
      description: req.body.description
    })
      .then(item =>
        res
          .status(201)
          .send({
            success: true,
            message: "Successfully created an MaterialType entity.",
            item
          })
      )
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return MaterialType.findAll()
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
    return MaterialType.findByPk(req.params.materialType)
      .then(item => {
        if (!item) {
          return res.status(404).send({
            message: "MaterialType Not Found"
          });
        }
        return res.status(200).send(item);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return MaterialType.findByPk(req.params.materialType)
      .then(item => {
        if (!item) {
          return res.status(404).send({
            message: "MaterialType Not Found"
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
    return MaterialType.findByPk(req.params.materialType)
      .then(item => {
        if (!item) {
          return res.status(400).send({
            message: "MaterialType Not Found"
          });
        }
        return item
          .destroy()
          .then(() =>
            res.status(204).send({ message: "Successfully deleted the MaterialType!" })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};