import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainView } from './com/fekkai/views/main/main.view';
import { HomePage } from './com/fekkai/views/main/home/home.page';
import { Shop } from './com/fekkai/components/shop/shop.component';
import { Blog } from './com/fekkai/components/blog/blog.component';
import { Commitment } from './com/fekkai/components/commitment/commitment.component';
import { Collectoins } from './com/fekkai/components/collections/collections.component';
import { Products } from './com/fekkai/components/products/products.component';


const routes: Routes = [
  {path: '', redirectTo: 'main/home', pathMatch: 'full'},
  {path: 'shop', component: Shop},
  {path: 'blog', component: Blog},
  {path: 'commitment', component: Commitment},
  {path: 'collections', component: Collectoins},
  {path: 'products', component: Products},
  {path: 'main', component: MainView, children:[
    {path: 'home', component: HomePage}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
