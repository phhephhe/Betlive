import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { OutsideClickDirective } from '../../core/directives/outside-click.directive';

@Component({
  selector: 'app-video-popup',
  standalone: true,
  imports: [MatDialogModule,OutsideClickDirective],
  templateUrl: './video-popup.component.html',
  styleUrl: './video-popup.component.scss'
})
export class VideoPopupComponent {

  constructor(private dialogRef: MatDialogRef<VideoPopupComponent>) {}

  outsideClick(): void {
    this.dialogRef.close();
  }

}
