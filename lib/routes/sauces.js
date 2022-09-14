const sauces = [
  {
    name: 'hot sauce',
    spiceLevel: 7,
  },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(sauces));
    res.end();
  },

  post(req, res) {
    sauces.push(req.body);
    res.write(JSON.stringify(req.body));
    res.end();
  },

  put(req, res) {
    console.log('req.body', req.body);
    console.log('req.body.newName', req.body.newName);
    const updatedSauce =
      sauces[
        sauces.findIndex((sauce) => sauce.name === req.body.name)
      ];
    updatedSauce.name = req.body.newName;
    res.write(JSON.stringify(sauces));
    res.end();
  },

  delete(req, res) {
    res.status = 400;
    res.send('No more sauces!');
    res.send();
  },
};
