import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged: boolean;
  showNavEmitter = new EventEmitter<boolean>();
  constructor() { }

  isLogged(): boolean{
    return this.logged;
  }

  setLoginState(state: boolean):void{
    this.logged = state;
    this.showNavEmitter.emit(true);
  }


}
