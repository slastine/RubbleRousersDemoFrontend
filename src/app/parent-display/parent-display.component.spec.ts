import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDisplayComponent } from './parent-display.component';

describe('ParentDisplayComponent', () => {
  let component: ParentDisplayComponent;
  let fixture: ComponentFixture<ParentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
