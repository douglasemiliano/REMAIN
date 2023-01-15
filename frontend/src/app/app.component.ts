import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './components/auth/auth.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'frontend';
  public loginScreen: boolean = false;
  public logged: boolean = false;
  public insideSystem: boolean = false;
  public isOpen: boolean = true;
  public user: User;

  constructor(private authService: AuthService,
              private router: Router) {
            }

  public ngOnInit(): void {  
    // this.router.navigate(['home']); 
    this.login();     

    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd){
        if ( data.url === "/home" || data.url.includes("/categoria")){
          this.insideSystem = false;
          this.loginScreen = false;
        }else if (data.url === "/login") {
          this.loginScreen = true;
          this.insideSystem = false;
        }else {
          this.insideSystem = true;
          this.loginScreen = false;
        }
      }     
    });
  }

  public encerrarSecao(tipo: boolean): void{
    this.logged = tipo;
    this.insideSystem = tipo;
    localStorage.clear();
    this.router.navigate(['home'])
    location.reload();
  }

  public login(): void {
    if (localStorage.length === 0) {      
      this.authService.userEmitter.subscribe(userReturned => {
        this.user = userReturned;
        this.logged = true;
        this.authService.setLoginState(true)
        this.router.navigate(['home']);
      });
    } else {      
      this.logged = true;
      this.authService.setLoginState(true)
      this.authService.getUserByUid(localStorage.getItem('uid')).subscribe(user => {
        this.user = user;
      });
    }
  }


  public setLoginState(): void {
    this.logged = this.authService.isLogged();
  }
}
