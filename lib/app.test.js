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

it.skip('PATCH returns 404 with an unknown method', async () => {
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

it.skip('PUT allows updates to existing cat', async () => {
  await request(app).put('/api/cats').expect(200);
  await request(app).get('/api/cats').expect(200);
});

it('DELETE deletes a cat', async () => {
  await request(app).delete('/api/cats').expect(204);
});
