import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDesignComponent } from './cat-design.component';

describe('CatDesignComponent', () => {
  let component: CatDesignComponent;
  let fixture: ComponentFixture<CatDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
