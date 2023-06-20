class Notify {
    send(template:string, message: string): void {
        console.log(`Sending notification: ${template} ${message}`);
    }
}

class Log {
    log(message: string): void {
        console.log(`Logging notification: ${message}`);
    }
}

class Template {
    template: { [key: string]: string } = {
        'email': 'Email template',
        'sms': 'SMS template',
        'push': 'Push template',
    } 
    
    getTemplate(type: string): string {
        return this.template[type];
    }
}

class NotificationService {
    notify: Notify;
    logger: Log;
    template: Template;

    constructor() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }

    send(type: string, message: string): void {
        const template = this.template.getTemplate(type);

        if(!template){
            this.logger.log('Template not found');
            return;
        }

        this.notify.send(template, message);
        this.logger.log('Notification sent');
    }
}

const notificationService = new NotificationService();

notificationService.send('email', 'Hello');
notificationService.send('sms', 'Hello');
notificationService.send('push', 'Hello');
notificationService.send('unknown', 'Hello');
