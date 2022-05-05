import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OldWayComponent } from './old-way.component';
import { OldWayBarComponent } from './old-way-bar.component';
import { OldWayFooComponent } from './old-way-foo.component';

const routes: Routes = [
  {
    path: '',
    component: OldWayComponent,
    children: [
      { path: 'bar', component: OldWayBarComponent },
      { path: 'foo', component: OldWayFooComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldWayRoutingModule {}
