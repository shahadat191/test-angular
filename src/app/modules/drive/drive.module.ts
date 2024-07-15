import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriveRoutingModule } from './drive-routing.module';
import { DriveComponent } from './drive.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';


@NgModule({
  declarations: [
    DriveComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    DriveRoutingModule
  ]
})
export class DriveModule { }
