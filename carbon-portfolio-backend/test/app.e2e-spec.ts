import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });
  it('/portfolio/generate (GET) - success', async () => {
    const tons = 10;
    const response = await request(app.getHttpServer())
      .get(`/portfolio/generate?tons=${tons}`)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('/portfolio/generate (GET) - failure', async () => {
    const tons = -10;
    const response = await request(app.getHttpServer())
      .get(`/portfolio/generate?tons=${tons}`)
      .expect(400);

    expect(response.body.message).toBe('Invalid input');
  });
});
