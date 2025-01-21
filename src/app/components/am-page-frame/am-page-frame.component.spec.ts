import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmPageFrameComponent } from './am-page-frame.component';

describe('AmPageFrameComponent', () => {
  let component: AmPageFrameComponent;
  let fixture: ComponentFixture<AmPageFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmPageFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmPageFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
