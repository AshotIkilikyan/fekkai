import {Component} from '@angular/core';
import {

    OnChanges,

    OnInit,

    DoCheck,

    AfterContentInit,

    AfterContentChecked,

    AfterViewInit,

    AfterViewChecked,

    OnDestroy

} from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class Header{
    constructor(){
        console.log(!this.Coleps)
    }
    ShopbtnClickHandler(){
        Navigator 
    }
    public Coleps = true;
    width: number;
    height: number;
    colepsbtnOn(){
        
    }
    
    onResized(event: ResizedEvent){
        console.log("asdfgh")
        this.Coleps = !this.Coleps;
        if(this.width <= 700){
            this.Coleps = this.Coleps
        }
    }
}
    