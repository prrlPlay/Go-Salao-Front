import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'gl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style ({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style ({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  menuState :string = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}