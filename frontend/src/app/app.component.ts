import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './components/auth/auth.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: '20rem',
      })),
      state('closed', style({
        width: '5rem',
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ]),
    ]),
  ],
})
export class AppComponent {
  public title: string = 'frontend';
  public logged: boolean = false;
  public isOpen: boolean = true;
  public user: User;

  constructor(private authService: AuthService,
              private router: Router,) {
            }

  public ngOnInit(): void {
    this.login();       
  }

  public encerrarSecao(tipo: boolean): void{
    this.logged = tipo;
    localStorage.clear();
    location.reload();
  }

  public login(): void {
    if (localStorage.length === 0) {
      this.router.navigate(['login'])
      this.authService.userEmitter.subscribe(userReturned => {
        this.user = userReturned;
        this.logged = true;        
      });
    } else {
      this.logged = true;
      // this.router.navigate(['materiais/1'])
      this.authService.getUserByUid(localStorage.getItem('uid')).subscribe(user => {
        this.user = user;
      });
    }
  }


  public setLoginState(): void {
    this.logged = this.authService.isLogged();
  }

  public resizeSidebar(): void {
    this.toggle();
    if (document.getElementById("sidebar")?.style.width === "20rem") {
      for (let i = 0; i <= document.getElementsByClassName("hide").length; i++) {
        document.getElementsByClassName("hide").item(i)?.setAttribute("style", "display: none")
        document.getElementsByClassName("icons").item(i)?.setAttribute("style", "width: 2rem; margin-left: -0.3rem" )

      }

    } else {
      for (let i = 0; i <= document.getElementsByClassName("hide").length; i++) {
        document.getElementsByClassName("hide").item(i)?.setAttribute("style", "display: block")
        document.getElementsByClassName("icons").item(i)?.setAttribute("style", "width: 3rem; margin: 0 0.8rem;" )


      }
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
