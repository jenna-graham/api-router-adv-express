import cats from './routes/cats.js';
import candies from './routes/candies.js';
import sauces from './routes/sauces.js';
import notFound from './not-found.js';
import parse from './bodyParser.js';

const log = (...args) => console.log('[server]', ...args);

const routes = {
  cats,
  candies,
  sauces,
};

export default async function (req, res) {
  const parts = req.url.split('/');

  log(parts);
  if (parts.length && parts[1] === 'api') {
    req.body = await parse(req);
    const resource = routes[parts[parts.length - 1]];
    log('URL parts:', parts);

    const route = resource[req.method.toLowerCase()];
    log('Method:', route);

    route(req, res);
    return;
  }

  notFound(req, res);
}
