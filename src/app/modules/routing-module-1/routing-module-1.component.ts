import { Component, OnInit } from '@angular/core';
import { SinglentonService } from '../../core/services/singlenton.service';

@Component({
    template: `
        <div>
            Componente 1
        </div>
    `,
    styles: [``]
})
export class RoutingModule1Component implements OnInit {
    constructor(
        private singlentonService: SinglentonService
    ) { }

    ngOnInit(): void { }
}
