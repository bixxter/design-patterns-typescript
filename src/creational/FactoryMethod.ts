/**
 * Фабричный метод (Factory Method) - это порождающий паттерн, который определяет общий интерфейс
 * для создания объектов в супер-классе, позволяя подклассам изменять тип создаваемых объектов.
 **/

interface ITransport {
    deliver(): string;
}

interface ILogistics {
    createTransport(): ITransport;
    deliveryRoute(): string;
    deliveryTime(): number;
}


class Truck implements ITransport {
    deliver(): string {
        return 'Deliver by road in a box';
    }
}

class Ship implements ITransport {
    deliver(): string {
        return 'Deliver by sea in a container';
    }
}

class Airplane implements ITransport {
    deliver(): string {
        return 'Deliver by air in a box';
    }
}

class TruckLogistics implements ILogistics {
    createTransport(): ITransport {
        return new Truck();
    }

    deliveryRoute(): string {
        return 'Road';
    }

    deliveryTime(): number {
        return 2;
    }
}

class ShipLogistics implements ILogistics {
    createTransport(): ITransport {
        return new Ship();
    }

    deliveryRoute(): string {
        return 'Sea';
    }

    deliveryTime(): number {
        return 10;
    }
}

class AirplaneLogistics implements ILogistics {
    createTransport(): ITransport {
        return new Airplane();
    }

    deliveryRoute(): string {
        return 'Air';
    }

    deliveryTime(): number {
        return 1;
    }
}


type LogisticsType = {
    truck: TruckLogistics;
    ship: ShipLogistics;
    airplane: AirplaneLogistics;
}

class LogisticsFactory {
    static createLogistics(type: keyof LogisticsType): ILogistics {
        const logistics = {
            truck: new TruckLogistics(),
            ship: new ShipLogistics(),
            airplane: new AirplaneLogistics(),
        };

        return logistics[type];
    }

}

const truckLogistics = LogisticsFactory.createLogistics('truck');
const shipLogistics = LogisticsFactory.createLogistics('ship');

