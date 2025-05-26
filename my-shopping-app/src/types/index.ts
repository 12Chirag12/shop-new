export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface User {
    id: string;
    email: string;
    createdAt: string;
}

export interface Order {
    id: string;
    userId: string;
    productIds: string[];
    orderDate: string;
    totalAmount: number;
}