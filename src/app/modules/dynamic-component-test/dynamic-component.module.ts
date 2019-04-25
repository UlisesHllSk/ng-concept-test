import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentTestComponent } from './dynamic-component-test.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
    {
        path: '',
        component: DynamicComponentTestComponent
    }
]

@NgModule({
    declarations: [
        DynamicComponentTestComponent,
        DynamicComponentComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    providers: [],
    bootstrap: [
        DynamicComponentTestComponent
    ]
})
export class DynamicComponentModule {}
