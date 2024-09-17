import { Component, inject, OnInit } from '@angular/core';
import { BonusSectionComponent } from "../../components/bonus-section/bonus-section.component";
import { SliderCardComponent } from "../../components/slider-card/slider-card.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ScrollDirective } from '../../core/directives/scroll.directive';
import { MatDialog } from '@angular/material/dialog';
import { VideoPopupComponent } from '../../components/video-popup/video-popup.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BonusSectionComponent, SliderCardComponent, TranslateModule,ScrollDirective ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit{
  constructor(
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initLanguage();
  }

  private initLanguage(): void {
    this.route.params.subscribe(params => {
      const lang = params['lang'] || 'ka';  
      this.translateService.use(lang);
    });
  }

  updateLanguage(language: string): void {
    const state = this.route.snapshot.paramMap.get('state') || 'home';  

    this.translateService.use(language);

    this.router.navigate([language, state], { 
      replaceUrl: true  
    });
  }

  openVideoDialog(): void {
    const dialogref = this.dialog.open(VideoPopupComponent);
  }


  
}