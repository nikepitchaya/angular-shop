import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/users/landing/landing.component';
import { ProductsComponent } from './pages/users/products/products.component';

const routes: Routes = [{ path: '', component: LandingComponent }, {
  path: 'products', component: ProductsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponent = [LandingComponent, ProductsComponent];
