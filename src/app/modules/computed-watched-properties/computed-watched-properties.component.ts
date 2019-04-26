import { Component, OnInit } from '@angular/core';
import { computed, observable } from 'mobx-angular';

@Component({
    template: `
        <div *mobxAutorun>
            {{computedProperty}}
            <br><br>
            {{watchedProperrty}}
        </div>
        <div>
            <button (click)="changeComputedProperty()">Change computed property</button>
        </div>
    `,
    styles: [``]
})
export class ComputedWatchedPropertiesComponent {
    @observable
    private _computedProperty = `computedProperty`;

    private _watchedProperty = `watchedProperrty`;

    @computed
    get computedProperty() {
        console.log('computedProperty');
        return this._computedProperty;
    }

    get watchedProperrty() {
        console.log('watchedProperrty');
        return this._watchedProperty;
    }

    changeComputedProperty() {
        this._computedProperty = 'changed';
    }
}
