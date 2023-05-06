import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss']
})
export class HeartComponent {
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
