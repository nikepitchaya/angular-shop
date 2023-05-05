import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MittenComponent } from './mitten.component';

describe('MittenComponent', () => {
  let component: MittenComponent;
  let fixture: ComponentFixture<MittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MittenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
