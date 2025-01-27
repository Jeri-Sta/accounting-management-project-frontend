import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmDynamicFieldComponent } from './am-dynamic-field.component';

describe('AmDynamicFieldComponent', () => {
  let component: AmDynamicFieldComponent;
  let fixture: ComponentFixture<AmDynamicFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmDynamicFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmDynamicFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
