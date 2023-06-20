interface WoltOrder {
    id: string;
    name: string;
    price: number;
    description: string;
    restaurant: string;
    deliveryTime: number;
    deliveryPrice: number;
}

interface ChocofoodOrder {
    id: string;
    title: string;
    price: number;
    description: string;
    restaurant_id: string;
    delivery_time: number;
    delivery_price: number;
}

class WoltOrderAdapter implements ChocofoodOrder {
    id: string;
    title: string;
    price: number;
    description: string;
    restaurant_id: string;
    delivery_time: number;
    delivery_price: number;

    constructor (order: WoltOrder) {
        this.id = order.id;
        this.title = order.name;
        this.price = order.price;
        this.description = order.description;
        this.restaurant_id = order.restaurant;
        this.delivery_time = order.deliveryTime;
        this.delivery_price = order.deliveryPrice;
    }
}

class Wolt {
    constructor (private orders: WoltOrder[]) {}

    getOrders (): WoltOrder[] {
        return this.orders;
    }
}

class Chocofood {
    constructor (private orders: ChocofoodOrder[]) {}

    getOrders (): ChocofoodOrder[] {
        return this.orders;
    }
}

const wolt = new Wolt([
    {
        id: '1',
        name: 'Some',
        price: 200,
        description: 'some',
        restaurant: '1',
        deliveryTime: 30,
        deliveryPrice: 100
    },
    {
        id: '2',
        name: 'Some2',
        price: 300,
        description: 'some2',
        restaurant: '2',
        deliveryTime: 40,
        deliveryPrice: 200
    }
]);

const chocofood = new Chocofood([
    {
        id: '1',
        title: 'Some',
        price: 200,
        description: 'some',    
        restaurant_id: '1',
        delivery_time: 30,
        delivery_price: 100
    },
    {
        id: '2',
        title: 'Some2',
        price: 300,
        description: 'some2',
        restaurant_id: '2',
        delivery_time: 40,
        delivery_price: 200
    }
]);

const woltOrders = wolt.getOrders();
const chocofoodOrders = chocofood.getOrders();

const woltOrdersAdapter = woltOrders.map(order => new WoltOrderAdapter(order));

console.log('Wolt',woltOrdersAdapter);
console.log('Chocofood', chocofoodOrders);


/**
 * Adapter functional example
 */

interface IOrder {
    id: string;
    name: string;
    price: number;
    description: string;
    restaurant: string;
    deliveryTime: number;
    deliveryPrice: number;
}

interface IWoltOrder {
    id: string;
    name: string;
    price: number;
    description: string;
    res: string;
    time: number;
    priceDelivery: number;
}

const woltOrderAdapter = (order: IOrder): IWoltOrder => ({
    id: order.id,
    name: order.name,
    price: order.price,
    description: order.description,
    res: order.restaurant,
    time: order.deliveryTime,
    priceDelivery: order.deliveryPrice
});

const woltOrders2 = woltOrders.map(order => woltOrderAdapter(order));
