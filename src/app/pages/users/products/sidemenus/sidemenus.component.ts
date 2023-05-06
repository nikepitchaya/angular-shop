import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidemenus',
  templateUrl: './sidemenus.component.html',
  styleUrls: ['./sidemenus.component.scss']
})
export class SidemenusComponent {
  @Input() category_name: string = ""
  constructor(public router: Router, public route: ActivatedRoute) {
    
  }

}
