import { Injectable } from '@angular/core';
import { Products } from '../interfaces/product.interface';
@Injectable({
    providedIn: 'root',
})
export class ProductService {
     getProductsByCategory(categoryId:number):Products{
        categoryId = 1;
        return
        

     }
     productsArr = [
         {id: 1, name: "Shampoo", description: "Extended Color Vibrancy", price: "8,5 fl oz -$20.00"},
         {id: 2, name: "Shampoo", description: "Extended Color Vibrancy", price: "8,5 fl oz -$20.00"},
         {id: 3, name: "Shampoo", description: "Extended Color Vibrancy", price: "8,5 fl oz -$20.00"},
     ]
}

