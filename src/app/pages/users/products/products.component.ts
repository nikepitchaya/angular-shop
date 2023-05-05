import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(public route: ActivatedRoute, public router: Router) {

  }
  ngOnInit() {
    // console.log(this.route.queryParams.name)
  }
  filterProduct(value: object): void {
    console.log(value)
  } 
}
