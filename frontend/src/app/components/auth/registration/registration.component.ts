import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  class: string;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void{
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  public onSubmit(): void {
    this.goToLogin();
    this.authService.registrationWithEmail(this.form.get('email')?.value, this.form.get('password')?.value)
  }

  public showToaster(): void{
    this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso', {easeTime: 300, progressAnimation: 'increasing', progressBar: true, timeOut: 3000});
  }
  public goToLogin(): void {
    this.router.navigate(['login']);
  }

}
