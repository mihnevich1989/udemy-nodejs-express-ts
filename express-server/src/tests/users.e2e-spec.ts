import { App } from '../app';
import { boot } from '../main';
import request from 'supertest';

let application: App;

beforeAll(async () => {
  const { app } = await boot;
  application = app;
});

describe('Users e2e', () => {
  it('Register error', async () => {
    const res = await request(application.app)
      .post('/users/register')
      .send({ email: 'test@example.com', password: '123456' });
    expect(res.statusCode).toBe(422);
  });
});

afterAll(() => {
  application.close();
});
