import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topmenus',
  templateUrl: './topmenus.component.html',
  styleUrls: ['./topmenus.component.scss']
})
export class TopmenusComponent {
  list: string[] = ['Price', 'Newest', 'A-z']
  order: string = ""
  name: string = ""

  @Output() filterProduct = new EventEmitter()

  setProduct(): void {
    let payload = {
      order: this.order,
      name: this.name
    }
    this.filterProduct.emit(payload)
  }
}
