import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmInputNumberComponent } from './am-input-number.component';

describe('AmInputnumberComponent', () => {
  let component: AmInputNumberComponent;
  let fixture: ComponentFixture<AmInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmInputNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
