import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingMdoule2Component } from './routing-module-2.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: RoutingMdoule2Component
  }
];

@NgModule({
  declarations: [RoutingMdoule2Component],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [],
  providers: []
})
export class RoutingModule2Module {}
