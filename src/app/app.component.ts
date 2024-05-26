import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <div>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent {
}
