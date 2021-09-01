import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: '30rem',
      })),
      state('closed', style({
        width: '8rem',
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
  title = 'frontend';
  logged = false;
  isOpen = true;
  user: any


  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.login();
  }

  login(): void {
    if (localStorage.length === 0) {
      this.router.navigate(['login'])
      this.authService.loginEmitter.subscribe(data => {
        this.user = this.authService.getUser();
        this.logged = data;
      })
    } else {
      this.logged = true;
      this.router.navigate(['materiais'])
    }
  }


  setLoginState(): void {
    this.logged = this.authService.isLogged();
  }

  logOut(): void {
    this.logged = false;
    this.router.navigate(['login'])
    localStorage.clear();
    location.reload();
  }

  resizeSidebar(): void {
    this.toggle();
    if (document.getElementById("sidebar")?.style.width === "30rem") {
      for (let i = 0; i <= document.getElementsByClassName("hide").length; i++) {
        document.getElementsByClassName("hide").item(i)?.setAttribute("style", "display: none")
        document.getElementsByClassName("icons").item(i)?.setAttribute("style", "margin-left: 1.25rem")

      }

    } else {
      for (let i = 0; i <= document.getElementsByClassName("hide").length; i++) {
        document.getElementsByClassName("hide").item(i)?.setAttribute("style", "display: block")
      }
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
