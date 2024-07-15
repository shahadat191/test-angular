import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'drive',
    loadChildren: () =>
      import('./modules/drive/drive.module').then((m) => m.DriveModule),
  },
  {
    path: 'ledger',
    loadChildren: () =>
      import('./modules/ledger/ledger.module').then((m) => m.LedgerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
