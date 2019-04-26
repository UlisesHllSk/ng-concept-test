import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglentonService } from '../core/services/singlenton.service';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MobxAngularModule,
    ],
    exports: [],
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [SinglentonService]
        };
    }
}
