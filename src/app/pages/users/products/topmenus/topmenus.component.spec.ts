import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmenusComponent } from './topmenus.component';

describe('TopmenusComponent', () => {
  let component: TopmenusComponent;
  let fixture: ComponentFixture<TopmenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopmenusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
