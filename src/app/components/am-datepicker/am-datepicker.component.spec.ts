import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmDatepickerComponent } from './am-datepicker.component';

describe('AmDatepickerComponent', () => {
  let component: AmDatepickerComponent;
  let fixture: ComponentFixture<AmDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmDatepickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
