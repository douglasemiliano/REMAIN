import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any;
  private logged: boolean;
  loginEmitter = new EventEmitter<boolean>();

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,) { }

  isLogged(): boolean {
    return this.logged;
  }

  setLoginState(state: boolean): void {
    this.logged = state;
    this.loginEmitter.emit(state);
  }

  login(): any {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  logout(): void {
    this.auth.signOut();
  }

  loginWithEmail(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setLoginState(true);
        result.user?.getIdToken().then(token => {
          localStorage['token'] = token;
          this.router.navigate(['materiais']);
          this.showToaster('Login realizado com sucesso!');
        });

      }).catch((error) => {
        this.showErrorToaster(error);
      });
  }

  registrationWithEmail(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((result => {
        this.showToaster('Cadastro criado com sucesso!');
        this.router.navigate(['login']);
      }));
  }

  AuthLogin(provider: any) {
    return this.auth.signInWithPopup(provider)
      .then((result) => {
        localStorage['logged'] = true;
        this.user = result?.user;
        this.setLoginState(true);
        this.router.navigate(['materiais'])
        this.showToaster('Login realizado com sucesso!');
      }).catch((error) => {
        this.showErrorToaster(error);
      });
  }

  showToaster(msg: string): void {
    this.toastr.success(msg, 'Sucesso', { easeTime: 300, progressAnimation: 'increasing', progressBar: true, timeOut: 2000 });
  }

  showErrorToaster(erro: Error): void {
    this.toastr.error(erro.message, "Erro!", { easeTime: 300, progressAnimation: 'increasing', progressBar: true, timeOut: 2000 });
  }

  getUser(): any {
    return this.user;
  }
}
