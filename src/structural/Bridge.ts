interface IProvider {
    connect (): void;
    disconnect (): void;
    send (message: string): void;
}

class EmailProvider implements IProvider {
    connect (): void {
        console.log('EmailProvider: connect');
    }

    disconnect (): void {
        console.log('EmailProvider: disconnect');
    }

    send (message: string): void {
        console.log('EmailProvider: send', message);
    }
}

class SmsProvider implements IProvider {
    connect (): void {
        console.log('SmsProvider: connect');
    }

    disconnect (): void {
        console.log('SmsProvider: disconnect');
    }

    send (message: string): void {
        console.log('SmsProvider: send', message);
    }
}

class NotificationSender {
    constructor (private provider: IProvider) {}

    send (message: string): void {
        this.provider.connect();
        this.provider.send(message);
        this.provider.disconnect();
    }
}

const emailProvider = new EmailProvider();
const smsProvider = new SmsProvider();

const emailNotification = new NotificationSender(emailProvider);
const smsNotification = new NotificationSender(smsProvider);

emailNotification.send('Hello');
smsNotification.send('Hello');