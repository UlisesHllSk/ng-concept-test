import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule1Component } from './routing-module-1.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: RoutingModule1Component
  }
];

@NgModule({
  declarations: [RoutingModule1Component],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [],
  providers: []
})
export class RoutingModule1Module {}
