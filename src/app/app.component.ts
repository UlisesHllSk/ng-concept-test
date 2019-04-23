import { Component } from '@angular/core';
import { computed, observable } from 'mobx-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-concept-test';

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
