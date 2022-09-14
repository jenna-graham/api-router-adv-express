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
    console.log('req.body', req.body);
    console.log('req.body.newName', req.body.newName);
    const updatedCandies =
      candies[
        candies.findIndex((candy) => candy.name === req.body.name)
      ];
    updatedCandy.name = req.body.newName;
    res.write(JSON.stringify(candies));
    res.end();
  },
  delete(req, res) {
    res.status = 400;
    res.send('No more candies!');
    res.send();
  },
};
