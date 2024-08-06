import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenGridComponent } from './kitten-grid.component';

describe('KittenGridComponent', () => {
  let component: KittenGridComponent;
  let fixture: ComponentFixture<KittenGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittenGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittenGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
