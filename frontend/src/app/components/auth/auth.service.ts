import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase  from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged: boolean;
  showNavEmitter = new EventEmitter<boolean>();

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,) { }

  isLogged(): boolean{
    return this.logged;
  }

  setLoginState(state: boolean):void{
    this.logged = state;
    this.showNavEmitter.emit(true);
  }

  login() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());  }
  logout() {
    this.auth.signOut();
  }

  AuthLogin(provider: any) {
    return this.auth.signInWithPopup(provider)
    .then((result) => {
        console.log(result.user?.displayName)
        this.setLoginState(true);
        this.router.navigate(['materiais']);
        this.showToaster();
    }).catch((error) => {
        console.log(error)
    });
  }

  showToaster(): void{
    this.toastr.success('Login realizado com sucesso!', 'Sucesso', {easeTime: 300, progressAnimation: 'increasing', progressBar: true, timeOut: 2000});
  }
}
