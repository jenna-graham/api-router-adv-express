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
};
