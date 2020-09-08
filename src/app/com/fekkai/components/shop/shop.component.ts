import {Component} from '@angular/core'
@Component({
    selector: 'app-shop',
    templateUrl: 'shop.component.html',
    styleUrls: ['shop.component.css'],
    
})

export class Shop{
    public showCollections:boolean = false;
    public showProducts:boolean = false;
    public showBenefits:boolean = false;
    showColArr(){
        this.showCollections = !this.showCollections;
        console.log(this.showColArr)
    }
    showProductArr(){
        this.showCollections = false;
        this.showProducts = !this.showProducts;
    }
    showBenefitArr(){
        this.showCollections = false;
        this.showProducts = false;
        this.showBenefits = !this.showBenefits;
    }

}