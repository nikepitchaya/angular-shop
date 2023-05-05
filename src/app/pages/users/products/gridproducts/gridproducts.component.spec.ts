import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridproductsComponent } from './gridproducts.component';

describe('GridproductsComponent', () => {
  let component: GridproductsComponent;
  let fixture: ComponentFixture<GridproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
