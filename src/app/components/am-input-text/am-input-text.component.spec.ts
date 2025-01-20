import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmInputTextComponent } from './am-input-text.component';

describe('AmInputTextComponent', () => {
  let component: AmInputTextComponent;
  let fixture: ComponentFixture<AmInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmInputTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
