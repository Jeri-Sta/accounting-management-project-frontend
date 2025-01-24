import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmPageHeaderComponent } from './am-page-header.component';

describe('AmPageHeaderComponent', () => {
  let component: AmPageHeaderComponent;
  let fixture: ComponentFixture<AmPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmPageHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
