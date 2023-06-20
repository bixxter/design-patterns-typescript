interface Furniture {
    hasLegs(): boolean;
    sitOn(): string;
}

abstract class FurnitureFactory {
    abstract createChair(): Furniture;
    abstract createSofa(): Furniture;
    abstract createCoffeeTable(): Furniture;
}

class VictorianChair implements Furniture {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): string {
        return 'Sit on Victorian chair';
    }
}

class VictorianSofa implements Furniture {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): string {
        return 'Sit on Victorian sofa';
    }
}

class VictorianCoffeeTable implements Furniture {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): string {
        return 'Sit on Victorian coffee table';
    }
}

class VictorianFurnitureFactory extends FurnitureFactory {
    createChair(): Furniture {
        return new VictorianChair();
    }

    createSofa(): Furniture {
        return new VictorianSofa();
    }

    createCoffeeTable(): Furniture {
        return new VictorianCoffeeTable();
    }
}

