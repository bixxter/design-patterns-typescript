interface WebApplication {
    login (username: string, password: string): void;
    logout (): void;
    sendMoney (amount: number): void;
}

class WebApplicationImpl implements WebApplication {
    constructor (private username: string, private password: string) {}

    login (username: string, password: string): void {
        console.log('WebApplication: login');
        this.username = username;
        this.password = password;
    }

    logout (): void {
        console.log('WebApplication: logout');
        this.username = '';
        this.password = '';
    }

    sendMoney (amount: number): void {
        console.log('WebApplication: sendMoney', amount);
    }
}

class WebApplicationProxy implements WebApplication {
    private webApplication: WebApplicationImpl;

    constructor (username: string, password: string) {
        this.webApplication = new WebApplicationImpl(username, password);
    }

    login (username: string, password: string): void {
        this.webApplication.login(username, password);
    }

    logout (): void {
        this.webApplication.logout();
    }

    sendMoney (amount: number): void {
        if (this.webApplication['username'] === 'admin') {
            this.webApplication.sendMoney(amount);
        } else {
            console.log('WebApplicationProxy: sendMoney - Access denied');
        }
    }
}

const webApplication = new WebApplicationProxy('admin', 'admin');
webApplication.sendMoney(1000);
webApplication.logout();

const webApplication2 = new WebApplicationProxy('user', 'user');
webApplication2.sendMoney(1000);
webApplication2.logout();
