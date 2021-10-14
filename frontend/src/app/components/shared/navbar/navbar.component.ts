import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }


  logOut(): void {
    this.logged = false;
    localStorage.clear();
    this.logoutEmitter.emit(false);
    this.router.navigate(['home'])
  }
}
