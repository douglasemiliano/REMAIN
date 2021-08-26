import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  goToRegistration(): void {
    this.router.navigate(['cadastro']);
  }

  showToaster(): void{
    this.toastr.success('Login realizado com sucesso!', 'Sucesso', {easeTime: 300, progressAnimation: 'increasing', progressBar: true, timeOut: 3000});
  }

  onSubmit(): void{
    this.router.navigate(['']);
    this.showToaster();
    console.log(this.form.value)    
  }

  createForm(): void{
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

}
