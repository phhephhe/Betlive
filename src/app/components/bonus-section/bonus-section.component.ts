import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonus-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bonus-section.component.html',
  styleUrl: './bonus-section.component.scss'
})
export class BonusSectionComponent implements OnInit{

  ngOnInit(): void {
    this.updateRandomCheckpoint()
  }
  checkpoints = [
    { position: 0, amount: 50 },
    { position: 25, amount: 150 },
    { position: 50, amount: 300 },
    { position: 75, amount: 500 },
    { position: 100, amount: 1000 }
  ];

  currentCheckpoint = 0;

  get progressWidth() {
    return this.currentCheckpoint * (100 / (this.checkpoints.length - 1));
  }

  updateRandomCheckpoint() {
    this.currentCheckpoint = Math.floor(Math.random() * this.checkpoints.length);
  }
}
