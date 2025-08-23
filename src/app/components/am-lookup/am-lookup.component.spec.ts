import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmLookupComponent } from './am-lookup.component';

describe('AmLookupComponent', () => {
  let component: AmLookupComponent;
  let fixture: ComponentFixture<AmLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmLookupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
