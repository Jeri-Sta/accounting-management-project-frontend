import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmSwitchComponent } from './am-switch.component';

describe('AmSwitchComponent', () => {
  let component: AmSwitchComponent;
  let fixture: ComponentFixture<AmSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
