const cats = [
  {
    color: 'black',
    name: 'booboo',
  },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {
    cats.push(req.body);
    res.write(JSON.stringify(req.body));
    res.end();
  },
  put(req, res) {},
  delete(req, res) {
    res.status = 400;
    res.send('No more cats!');
    res.send();
  },
};
