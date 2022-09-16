const candies = [
  {
    name: 'Skittles',
    taste: 'sweet',
  },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {
    candies.push(req.body);
    res.write(JSON.stringify(req.body));
    res.end();
  },
  put(req, res) {
    const updatedCandy =
      candies[
        candies.findIndex((candy) => candy.name === req.body.name)
      ];
    updatedCandy.name = req.body.newName;
    res.write(JSON.stringify(candies));
    res.end();
  },
  delete(req, res) {
    candies.pop();
    res.statusCode = 204;
    res.end();
  },
};
