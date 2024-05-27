import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  template: `
  <div id="header-component">
    <h3 (click)="redirect()">PORTAL GRP</h3>
  </div>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  redirect() {
    window.location.href = '/home';
  }
}
