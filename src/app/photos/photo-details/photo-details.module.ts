import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommetsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommetsComponent
  ],
  exports: [
    PhotoDetailsComponent,
    PhotoCommetsComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule
  ]
})
export class PhotoDetailsModule { }