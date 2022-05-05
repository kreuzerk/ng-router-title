import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'old-way', loadChildren: () => import('./features/old-way/old-way.module').then(m => m.OldWayModule) }, { path: 'new-way', loadChildren: () => import('./features/new-way/new-way.module').then(m => m.NewWayModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
