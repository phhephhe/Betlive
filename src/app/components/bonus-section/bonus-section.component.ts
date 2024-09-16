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
    { position: 0, amount: 1000 },
    { position: 25, amount: 5000 },
    { position: 50, amount: 10000 },
    { position: 75, amount: 20000 },
    { position: 100, amount: 50000 }
  ];

  // Variable to track the current checkpoint (1-based index)
  currentCheckpoint = 0;

  // Calculate the progress width based on the current checkpoint
  get progressWidth() {
    console.log(this.currentCheckpoint * (100 / (this.checkpoints.length - 1)),"+")
    return this.currentCheckpoint * (100 / (this.checkpoints.length - 1));
  }

  // Function to randomly select a checkpoint
  updateRandomCheckpoint() {
    this.currentCheckpoint = Math.floor(Math.random() * this.checkpoints.length);
    console.log(this.currentCheckpoint,'-=')
  }
}
