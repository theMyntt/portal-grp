import { Component } from '@angular/core';
import { CoreModule } from '../../../core/core.module';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CoreModule],
  templateUrl: '../pages/home.component.html',
  styleUrl: '../pages/home.component.scss'
})
export class HomeComponent {

}
