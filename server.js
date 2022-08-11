const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults({ static: './build' });

const port = process.env.PORT || 4000;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use('/api', router);
server.listen(port, () => {
  console.log('JSON Server is running');
});
