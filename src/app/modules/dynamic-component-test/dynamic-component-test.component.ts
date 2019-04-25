import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { INJECTION_TOKEN_TEST, DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { ComponentFactory } from '@angular/core/src/render3';

@Component({
    entryComponents: [
        DynamicComponentComponent,
    ],
    template: `
        <ng-container #container></ng-container>
        <div>
            <button (click)="createComponent(true)">Generar con InjectionToken</button>
            <button (click)="createComponent(false)">No generar con InjectionToken</button>
        </div>
    `,
})
export class DynamicComponentTestComponent implements OnInit {

    @ViewChild('container', { read: ViewContainerRef })
    container: ViewContainerRef;

    constructor(
        private resolver: ComponentFactoryResolver,
        private injector: Injector
    ) { }

    ngOnInit(): void { }

    public createComponent(event: boolean) {
        console.time('CreateComponent');
        const factory = this.resolver.resolveComponentFactory<DynamicComponentComponent>(DynamicComponentComponent);
        let component: ComponentRef<DynamicComponentComponent> = null;
        const tokenData = {titulo: 'Título del componente'};
        if (event) {
            component = factory.create(Injector.create({
                providers: [{provide: INJECTION_TOKEN_TEST, useValue: tokenData}]
            }));
            console.timeEnd('CreateComponent')
        } else {
            component = factory.create(this.container.injector);
            component.instance.titulo = tokenData.titulo;
            console.timeEnd('CreateComponent')
        }
        // Insert the component into the dom container
        this.container.insert(component.hostView);
    }
}
