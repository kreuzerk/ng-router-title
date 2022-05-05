import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewWayComponent } from './new-way.component';

const routes: Routes = [{ path: '', component: NewWayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewWayRoutingModule { }
