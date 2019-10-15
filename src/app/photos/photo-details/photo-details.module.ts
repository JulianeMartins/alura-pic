import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommetsComponent } from './photo-comments/photo-comments.component';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

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
    RouterModule,
    ReactiveFormsModule,
    VMessageModule
  ]
})
export class PhotoDetailsModule { }