import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topmenus',
  templateUrl: './topmenus.component.html',
  styleUrls: ['./topmenus.component.scss']
})
export class TopmenusComponent {
  list: string[] = ['Price', 'Newest', 'A-z']
  order: string = ""
  product_name: string = ""

  @Output() filterProduct = new EventEmitter()

  setProduct(): void {
    let payload = {
      order: this.order,
      product_name: this.product_name
    }
    this.filterProduct.emit(payload)
  }
}
