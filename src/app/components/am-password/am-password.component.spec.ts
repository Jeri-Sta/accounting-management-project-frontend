import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmPasswordComponent } from './am-password.component';

describe('AmPasswordComponent', () => {
  let component: AmPasswordComponent;
  let fixture: ComponentFixture<AmPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AmPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
