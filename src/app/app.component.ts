import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './modules/home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeModule],
  template: `
  <div>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent {
}
