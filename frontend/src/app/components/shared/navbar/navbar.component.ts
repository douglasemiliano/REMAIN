import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public collapsed = true;
  public logged: boolean;
  @Input() public user: any;
  @Output() public logoutEmitter = new EventEmitter<boolean>();
  public search = new FormControl();
  public isAdmin: boolean = false;
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public verifyIsAdmin(): void {
   this.user.role[0].name == "ADMIN" ? this.isAdmin = true: this.isAdmin = false;
  }


  logOut(): void {
    this.logged = false;
    localStorage.clear();
    this.logoutEmitter.emit(false);
    this.router.navigate(['home'])
  }

  public onSearch(): void{
    console.log(this.search.value);
    this.router.navigate(['materiais','categoria','6'])
  }
}
