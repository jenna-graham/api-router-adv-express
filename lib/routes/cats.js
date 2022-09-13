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
    const newCat = {
      color: 'orange',
      name: 'slinky',
    };
    cats.push(newCat);
    res.write(JSON.stringify(newCat));
  },
  put(req, res) {},
  delete(req, res) {
    res.status = 400;
    res.send('No more cats!');
    res.send();
  },
};
