import {Component, Injectable} from '@angular/core';
import { CollectionService } from '../../services/collections.service';

@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'app-collections',
    templateUrl: 'collections.component.html',
    styleUrls: ['collections.component.css']
})

export class Collectoins{
    constructor(public appservice : CollectionService){}
    
}