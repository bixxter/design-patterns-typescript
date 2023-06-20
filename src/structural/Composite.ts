interface Employee {
    getName(): string;
    getSalary(): number;
    setSalary(salary: number): void;
    getRoles(): void;
}

class Developer implements Employee {
    constructor(public name: string, public salary: number) { }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(salary: number): void {
        this.salary = salary;
    }

    getRoles(): void {
        console.log(`${this.name} is a developer`);
    }
}

class Designer implements Employee {
    constructor(public name: string, public salary: number) { }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(salary: number): void {
        this.salary = salary;
    }

    getRoles(): void {
        console.log(`${this.name} is a designer`);
    }
}

class Organization {
    private employees: Employee[] = [];

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    getNetSalaries(): number {
        let netSalary = 0;

        this.employees.forEach(employee => {
            netSalary += employee.getSalary();
        });

        return netSalary;
    }
}

const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane', 10000);

const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);


console.log("Net salaries: " + organization.getNetSalaries());