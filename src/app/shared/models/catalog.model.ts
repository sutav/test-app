
export class Product {
    public id: number;
    public name: string;   
}
export class ShoppingCartItem {
    public product: Product;
    public quantity: number;
    public price: number;
    public totalPrice: number;    
    public id: string;
}
export class ShoppingCart {
    public items: ShoppingCartItem[] = [];    
}
