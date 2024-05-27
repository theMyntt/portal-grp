import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="card-component">
    <div class="card-image" *ngIf="imageName">
      <img src="assets/img/{{imageName}}" />
    </div>
    <div class="card-content">
      <span class="card-title">{{title}}</span>
      <p>{{description}}</p>
    </div>
    <h4>{{isValidPrice(price)}}</h4>
    <div class="card-action">
      <a href="{{link}}">Fazer proposta.</a>
    </div>
  </div>
  `,
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() public imageName: string = "";
  @Input() public title: string = "";
  @Input() public description: string = "";
  @Input() public price: string = "";
  @Input() public link: string = "";

  isValidPrice(price: string): string {
    if (isNaN(parseFloat(price))) return ""

    return "R$ " + parseFloat(price).toFixed(2);
  }
}