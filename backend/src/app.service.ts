import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProfile() {
    return {
      company: 'Apsara',
      status: 'Online',
      message:
        'Apsara builds AI-native, human-centric software products and consulting solutions, including mobile apps, AI agents, custom RAG, and model hosting.',
    };
  }

  submitContact(payload: {
    name: string;
    email: string;
    company?: string;
    message: string;
  }) {
    return {
      success: true,
      message: 'Contact request received.',
      received: {
        name: payload.name,
        email: payload.email,
        company: payload.company ?? '',
      },
    };
  }
}
