import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmFormComponent } from './am-form.component';

describe('AmFormComponent', () => {
  let component: AmFormComponent;
  let fixture: ComponentFixture<AmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
