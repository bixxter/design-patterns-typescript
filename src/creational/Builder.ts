class User {
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public password: string
    ) {}
}

class UserBuilder {
    public name!: string;
    public age!: number;
    public email!: string;
    public password!: string;

    setName(name: string): UserBuilder {
        this.name = name;
        return this;
    }

    setAge(age: number): UserBuilder {
        this.age = age;
        return this;
    }

    setEmail(email: string): UserBuilder {
        this.email = email;
        return this;
    }

    setPassword(password: string): UserBuilder {
        this.password = password;
        return this;
    }

    build(): User {
        return new User(
            this.name,
            this.age,
            this.email,
            this.password
        );
    }

}

const user = new UserBuilder()
    .setName('John')
    .setAge(30)
    .setEmail('jojo@gmail.com')
    .setPassword('123456')
    .build();

const user2 = new UserBuilder()
    .setName('Some')
    .setEmail('some@gmail.com')
    .setPassword('123456')
    .build();
