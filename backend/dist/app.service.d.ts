export declare class AppService {
    getProfile(): {
        company: string;
        status: string;
        message: string;
    };
    submitContact(payload: {
        name: string;
        email: string;
        company?: string;
        message: string;
    }): {
        success: boolean;
        message: string;
        received: {
            name: string;
            email: string;
            company: string;
        };
    };
}
