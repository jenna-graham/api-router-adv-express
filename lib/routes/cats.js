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
  put(req, res) {
    console.log('req.body', req.body);
    console.log('req.body.newName', req.body.newName);
    const updatedCat =
      cats[cats.findIndex((cat) => cat.name === req.body.name)];
    updatedCat.name = req.body.newName;
    res.write(JSON.stringify(cats));
    res.end();
  },
  delete(req, res) {
    cats.pop();
    res.statusCode = 204;
    res.end();
  },
};
