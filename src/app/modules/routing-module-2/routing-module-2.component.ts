import { Component, OnInit } from '@angular/core';
import { SinglentonService } from '../../core/services/singlenton.service';

@Component({
    template: `
        <div>
            Componente 2
        </div>
    `,
    styles: [``]
})
export class RoutingMdoule2Component implements OnInit {
    constructor(
        private singlentonService: SinglentonService
    ) { }

    ngOnInit(): void { }
}
