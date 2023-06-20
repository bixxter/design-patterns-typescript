abstract class Shape {
    constructor(public x: number, public y: number, public color: string) {}

    abstract clone(): Shape;
}

class Rectangle extends Shape{
    constructor(x: number, y: number, color: string){
        super(x, y, color)
    }

    clone(): Shape {
        return new Rectangle(this.x, this.y, this.color)
    }
}

class Circle extends Shape{
    constructor(x: number, y: number, color: string){
        super(x, y, color)
    }

    clone(): Shape {
        return new Circle(this.x, this.y, this.color)
    }
}

const shapes: Shape[] = []

const circle = new Circle(10, 10, 'red')
const rectangle = new Rectangle(0, 0, 'blue')

const cloneCircle = circle.clone()
const cloneRectangle = rectangle.clone()

shapes.push(cloneCircle)
shapes.push(cloneRectangle)

console.log(shapes)
