import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.scss']
})
export class ShirtComponent {
  @Input() width: string = "32"
  @Input() height: string = ""
  @Input() fill: string = "#000"

  @ViewChild('icon') icon: any

  ngAfterViewInit() {
    this.icon.nativeElement.style.setProperty(
      'width',
      `${this.width}px`
    );
    this.icon.nativeElement.style.setProperty(
      'height',
      `${this.height ? this.height + "px" : "100%"}`
    );
    this.icon.nativeElement.style.setProperty(
      'fill',
      `${this.fill}`
    );
  }
}
