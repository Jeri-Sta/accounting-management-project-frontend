import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmGridDataComponent } from './am-grid-data.component';

describe('AmGridDataComponent', () => {
  let component: AmGridDataComponent;
  let fixture: ComponentFixture<AmGridDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmGridDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmGridDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
