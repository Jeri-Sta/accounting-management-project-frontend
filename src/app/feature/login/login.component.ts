import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'am-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.component.notebook.scss'],
})
export class LoginComponent implements OnInit{
  protected displayed: boolean = false;
  protected formGroup: FormGroup = new FormGroup({});

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.getFormGroup();
  }

  private getFormGroup(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  protected changeHelp(isFalse?: boolean): void {
    if (isFalse) {
      this.displayed = false;
      return;
    }
    this.displayed = !this.displayed;
  }
}
