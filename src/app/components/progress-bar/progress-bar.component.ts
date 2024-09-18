import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {

  message: string = "გათამაშებული ყოველი 1000₾ = 1 ბონუს რაუნდს";

  isMessageVisible: boolean = false;
  
  toggleTooltip(): void {
    this.isMessageVisible = !this.isMessageVisible;
  }
  
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
