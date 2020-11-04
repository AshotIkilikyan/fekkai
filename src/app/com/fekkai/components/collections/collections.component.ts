import { CollectionService } from './../../services/collections.service';

import {Component, Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'app-collections',
    templateUrl: 'collections.component.html',
    styleUrls: ['collections.component.css']
})

export class Collectoins{
    public showProducts: boolean[] = [];
    constructor(public appservice : CollectionService){
        let count=this.appservice.collectoinsArr.length;
        for (let index = 0; index < count; index++) {
            this.showProducts[index]=false;
        }
    }
    showProductArr(index){
        this.showProducts[index] = !this.showProducts[index];
    }
}