interface IProduct {
    id: number
    name: string
    description: string
    price: number
}

class MenuProducts{
    
    private static instance: MenuProducts
    private constructor(){}

    products: Map<number, IProduct> = new Map()

    get(id: number){
        return this.products.get(id)
    }

    add(id: number, value: IProduct){
        this.products.set(id, value)
    }

    clear(){
        this.products = new Map()
    }

    show(){
        console.log(this.products)
    }

    public static getInstance(): MenuProducts{
        if(!MenuProducts.instance){
            MenuProducts.instance = new MenuProducts()
        }

        return MenuProducts.instance
    }
}
