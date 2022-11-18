import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCitiesButtonComponent } from './popular-cities-button.component';

describe('PopularCitiesButtonComponent', () => {
  let component: PopularCitiesButtonComponent;
  let fixture: ComponentFixture<PopularCitiesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCitiesButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularCitiesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
