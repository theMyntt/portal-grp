import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-component">
      <div class="card-image" *ngIf="imageName">
        <img src="assets/img/{{ imageName }}" />
        <br /> <br />
      </div>
      <div class="card-content">
        <h2 class="card-title">{{ title }}</h2> <br />
        <p>{{ description }}</p>
      </div>
      <br/>
      <h4>{{ isValidPrice(price) }}</h4>
      <span *ngIf="unity" style="font-size: 12px;">(cada unidade)</span>
      <br/><br *ngIf="unity" />
      <div class="card-action">
        <a href="{{ link }}" class="template-btn">Compre agora!</a>
      </div>
    </div>
  `,
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() public imageName: string = '';
  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public price: string = '';
  @Input() public link: string = '';
  @Input() public unity: boolean = false;

  isValidPrice(price: string): string {
    const trimmedPrice = price.trim();

    if (isNaN(parseFloat(trimmedPrice))) return '';

    if (!trimmedPrice.includes('.')) {
      return (
        'R$ ' + parseFloat(trimmedPrice).toFixed(0).replace('.', ',') + ',99'
      );
    }
    const formattedPrice = parseFloat(trimmedPrice)
      .toFixed(2)
      .replace('.', ',');
    return 'R$ ' + formattedPrice;
  }
}
