import { Component } from '@angular/core';
import { BonusSectionComponent } from "../../components/bonus-section/bonus-section.component";
import { SliderCardComponent } from "../../components/slider-card/slider-card.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BonusSectionComponent, SliderCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
