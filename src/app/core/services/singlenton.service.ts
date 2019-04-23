import { Injectable } from '@angular/core';

@Injectable()
export class SinglentonService {
    constructor() {
        console.log('init SinglentonService');
    }
}