import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/profile (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/profile')
      .expect(200)
      .expect({
        company: 'Apsara',
        status: 'Online',
        message:
          'Apsara builds AI-native, human-centric software products and consulting solutions, including mobile apps, AI agents, custom RAG, and model hosting.',
      });
  });

  it('/api/contact (POST)', () => {
    return request(app.getHttpServer())
      .post('/api/contact')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Sample Co',
        message: 'Hello team',
      })
      .expect(201)
      .expect({
        success: true,
        message: 'Contact request received.',
        received: {
          name: 'Test User',
          email: 'test@example.com',
          company: 'Sample Co',
        },
      });
  });
});
