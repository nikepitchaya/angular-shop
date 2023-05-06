import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  category_name: string = ""
  constructor(public route: ActivatedRoute, public router: Router) {
  }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.category_name = params['name'];
      }
      );
  }
  filterProduct(value: object): void {
    console.log(value)
  }
}
