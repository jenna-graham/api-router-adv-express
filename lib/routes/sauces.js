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
};
