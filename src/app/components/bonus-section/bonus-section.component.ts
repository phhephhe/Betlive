import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bonus-section',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './bonus-section.component.html',
  styleUrl: './bonus-section.component.scss'
})

export class BonusSectionComponent {

  constructor(private route: ActivatedRoute) { }

  play() {
    this.route.params.subscribe(params => {
      console.log(params)
    });
  }
}