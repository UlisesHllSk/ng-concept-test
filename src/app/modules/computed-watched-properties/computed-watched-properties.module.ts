import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputedWatchedPropertiesComponent } from './computed-watched-properties.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Route[] = [
    {
        path: '',
        component: ComputedWatchedPropertiesComponent,
    }
]

@NgModule({
    declarations: [
        ComputedWatchedPropertiesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
    exports: [],
    providers: [],
})
export class ComputedWatchedPropertiesModule {}
