import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
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
export class SidebarComponent implements OnInit {

  public title: string = 'frontend';
  @Input() public logged: boolean = false;
  @Input() public insideSystem: boolean = false;
  public isOpen: boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.toggle();
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

  public toggle() {
    this.isOpen = !this.isOpen;
  }

}
