import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Unknown URL returns 404', async () => {
  const { text, status } = await request(app).get('/api/not-found');
  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Returns 404 not found on bad method', async () => {
  await request(app).patch('/api/cats').expect(404);
});

it('GET will return array of cats', async () => {
  await request(app).get('/api/cats').expect(200);
});

it('POST will create a new cat', async () => {
  const newCat = {
    color: 'red',
    name: 'Stimpy',
  };
  const res = await request(app)
    .post('/api/cats')
    .send(newCat)
    .expect(200);
});

it('PUT /cats will change an object in the array', async () => {
  const updateCat = {
    name: 'booboo',
  };
  const res = await request(app).put('/api/cats').send(updateCat);
  expect(res.status).toBe(200);
});

it('DELETE deletes a cat', async () => {
  await request(app).delete('/api/cats').expect(204);
});

it('GET will return array of candies', async () => {
  await request(app).get('/api/candies').expect(200);
});

it('POST will create a new candy', async () => {
  const newCandy = {
    name: 'Snickers',
    taste: 'Salty',
  };
  const res = await request(app)
    .post('/api/candies')
    .send(newCandy)
    .expect(200);
});

it('PUT /candies will change an object in the array', async () => {
  const updatedCandy = {
    name: 'Skittles',
  };
  const res = await request(app)
    .put('/api/candies')
    .send(updatedCandy);
  expect(res.status).toBe(200);
});

it('DELETE deletes a candy', async () => {
  await request(app).delete('/api/candies').expect(204);
});

it('GET will return array of sauces', async () => {
  await request(app).get('/api/sauces').expect(200);
});

it('POST will create a new sauce', async () => {
  const newSauce = {
    name: 'Soy',
    spiceLevel: 1,
  };
  const res = await request(app)
    .post('/api/sauces')
    .send(newSauce)
    .expect(200);
});

it('PUT /candies will change an object in the array', async () => {
  const updatedSauce = {
    name: 'hot sauce',
  };
  const res = await request(app)
    .put('/api/sauces')
    .send(updatedSauce);
  expect(res.status).toBe(200);
});

it('DELETE deletes a sauce', async () => {
  await request(app).delete('/api/sauces').expect(204);
});
