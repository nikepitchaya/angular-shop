import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  product_name: string = ""
  constructor(public router: Router, public route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.product_name = params['name'];
      }
      );
  }
}
