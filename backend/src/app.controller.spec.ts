import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('profile', () => {
    it('should return company profile data', () => {
      expect(appController.getProfile()).toEqual({
        company: 'Apsara',
        status: 'Online',
        message:
          'Apsara builds AI-native, human-centric software products and consulting solutions, including mobile apps, AI agents, custom RAG, and model hosting.',
      });
    });
  });

  describe('contact', () => {
    it('should accept a contact request payload', () => {
      expect(
        appController.submitContact({
          name: 'Test User',
          email: 'test@example.com',
          company: 'Sample Co',
          message: 'Hello team',
        }),
      ).toEqual({
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
});
