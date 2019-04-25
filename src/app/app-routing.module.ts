import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'routing-module-1',
    loadChildren: './modules/routing-module-1/routing-module-1.module#RoutingModule1Module'
  },
  {
    path: 'routing-module-2',
    loadChildren: './modules/routing-module-2/routing-module-2.module#RoutingModule2Module'
  },
  {
    path: 'dynamic-component',
    loadChildren: './modules/dynamic-component-test/dynamic-component.module#DynamicComponentModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
