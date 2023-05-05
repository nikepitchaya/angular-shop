import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenusComponent } from './sidemenus.component';

describe('SidemenusComponent', () => {
  let component: SidemenusComponent;
  let fixture: ComponentFixture<SidemenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidemenusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidemenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
