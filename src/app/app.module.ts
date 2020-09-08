import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Commitment } from './com/fekkai/components/commitment/commitment.component';
import { Shop } from './com/fekkai/components/shop/shop.component';
import { Header } from './com/fekkai/components/header/header.component';
import { Blog } from './com/fekkai/components/blog/blog.component';
import { HomePage } from './com/fekkai/views/main/home/home.page';
import { MainView } from './com/fekkai/views/main/main.view';
import { Collectoins } from './com/fekkai/components/collections/collections.component';
//-------------------------
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AngularResizedEventModule } from 'angular-resize-event';
@NgModule({
  declarations: [
    AppComponent,
    Shop,
    Header,
    Commitment,
    Blog,
    HomePage,
    MainView,
    Collectoins,
    


  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularResizedEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
