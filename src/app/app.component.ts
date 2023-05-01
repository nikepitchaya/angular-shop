import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('mainContent') mainContent: any;
  @ViewChild('mainFooter') mainFooter: any;
  ngAfterViewInit() {
    this.mainContent.nativeElement.style.setProperty(
      'min-height',
      `${100 + 34 - this.mainFooter.nativeElement.offsetHeight}vh`
    );
  }
}
