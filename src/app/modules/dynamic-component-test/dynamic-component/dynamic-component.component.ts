import { Component, OnInit, InjectionToken, Inject, Input, Optional } from '@angular/core';

export const INJECTION_TOKEN_TEST = new InjectionToken<{}>('INJECTION_TOKEN_TEST');

@Component({
    template: `{{titulo}}`,
})
export class DynamicComponentComponent implements OnInit {

    @Input()
    titulo: string;

    constructor(
        @Optional() @Inject(INJECTION_TOKEN_TEST) data: any
    ) {
        if (data) {
            this.titulo = data.titulo;
        }
        console.log('contructor', this);
    }

    ngOnInit(): void {
        console.log('ngOnInit', this);
    }
}
