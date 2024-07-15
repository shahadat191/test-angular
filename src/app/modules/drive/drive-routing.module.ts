import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriveComponent } from './drive.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

const routes: Routes = [
  { path: '', component: DriveComponent },
  { path: 'upload-file', component: UploadFileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriveRoutingModule { }
