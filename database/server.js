const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Atur middlewares
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Menangani pengecualian id unik untuk entitas 'basket'
router.render = (req, res) => {
  if (req.url === "/basket") {
    res.jsonp({ basket: res.locals.data });
  } else {
    res.jsonp(res.locals.data);
  }
};

// Gunakan router dan jalankan server
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
