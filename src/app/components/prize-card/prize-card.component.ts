import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prize-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prize-card.component.html',
  styleUrl: './prize-card.component.scss'
})
export class PrizeCardComponent {

  ngOnInit(): void {
    this.generateRandomCoins();
  }

  coins: string[] = [];
  totalCoins: number = 10; 

  generateRandomCoins(): void {
    const filledCoinsCount = Math.floor(Math.random() * (this.totalCoins + 1));

    for (let i = 0; i < filledCoinsCount; i++) {
      this.coins.push('filled');
    }

    for (let i = filledCoinsCount; i < this.totalCoins; i++) {
      this.coins.push('unfilled');
    }
  }

  getCoinImage(coinType: string): string {
    return coinType === 'filled'
      ? '/images/coins/m4-coin-filled.svg'
      : '/images/coins/m4-coin-unfilled.svg';
  }
}
