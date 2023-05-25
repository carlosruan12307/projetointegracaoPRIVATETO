import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth-service.service';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css'],
})
export class FormSignUpComponent implements OnInit {
  formGroup!: FormGroup;
  error!: string;
  constructor(
    private service: AuthService,
    private router: Router,
    private rout: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required]),
    });
  }
  submit() {
    this.service.cadastrar(this.formGroup).subscribe({
      next: response => {
        console.log(response)
      },
      error: error => {
        console.log(error)
      }
    })
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  get name() {
    return this.formGroup.get('name');
  }

}
