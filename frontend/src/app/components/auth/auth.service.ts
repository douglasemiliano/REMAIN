import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any;
  private logged: boolean;
  public userEmitter = new EventEmitter<any>();
  public form: FormGroup;

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private http: HttpClient) { 
    }

  isLogged(): boolean {
    return this.logged;
  }

  createForm(): void{
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      birthDate: new FormControl(),
      phone: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      uid: new FormControl(''),
      photoUrl: new FormControl(''),
      emailVerified: new FormControl ('')
    });
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
        result.user?.getIdToken().then(uid => {
          localStorage['uid'] = uid;
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

  
  fillTheForm(user: any){
    this.createForm();
    let name = (user?.displayName).split(" ");
    this.form.get("firstName")?.setValue(name[0])  
    this.form.get("lastName")?.setValue(name[1])
    this.form.get("email")?.setValue(user?.email) 
    this.form.get("uid")?.setValue(user?.uid)  
    this.form.get("photoUrl")?.setValue(user?.photoURL)
    this.form.get("emailVerified")?.setValue(user?.emailVerified)
  }


  AuthLogin(provider: any) {
    return this.auth.signInWithPopup(provider)
      .then((result) => {
        this.fillTheForm(result?.user)
        localStorage['uid'] = result.user?.uid;        
        this.saveUser(this.form.value)
        this.router.navigate(['materiais'])      
        // this.showToaster('Login realizado com sucesso!');
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

  public saveUser(user: any):any{
    return this.http.post('http://localhost:8080/public/user', user)
    .subscribe(userReturned => {
      this.user = userReturned;   
      this.userEmitter.emit(userReturned);     
      this.toastr.success("Usuário logado com sucesso","Sucesso")
    }, error => {
      this.toastr.error(error, "Erro")
    });
  }

  public getUserByUid(uid: any): Observable<any> {
    return this.http.get(`http://localhost:8080/public/user/search=${uid}`);
  }
}
