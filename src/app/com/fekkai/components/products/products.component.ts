import { Component, Injectable } from '@angular/core';
import { ProductService } from './../../services/products.service';
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'app-products',
    templateUrl: 'products.component.html',
    styleUrls: ['products.component.css']
})

export class Products{
    constructor(public appService : ProductService){}
}