const articleController = require("../controllers/article");
const materialTypeController = require("../controllers/materialtype");

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );
  // POST item
  app.post("/article", articleController.create);
  // GET list of all articles
  app.get("/article", articleController.list);
  // GET a single article by ID
  app.get("/article/:articleId", articleController.retrieve);
  // UPDATE a single article by ID
  app.put("/article/:articleId", articleController.update);
  // DELETE a single article by ID
  app.delete("/article/:articleId", articleController.delete);


  // POST item
  app.post("/materialtype", materialTypeController.create);
  // GET list of all articles
  app.get("/materialtype", materialTypeController.list);
  // GET a single article by ID
  app.get("/materialtype/:materialType", materialTypeController.retrieve);
  // UPDATE a single article by ID
  app.put("/materialtype/:materialType", materialTypeController.update);
  // DELETE a single article by ID
  app.delete("/materialtype/:materialType", materialTypeController.delete);
};