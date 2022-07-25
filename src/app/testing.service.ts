import { Injectable } from '@angular/core';
import { FirstDependensyService } from './first-dependensy.service';

@Injectable({
    providedIn: 'root',
})
export class TestingService {

    constructor(private firstDependencyService: FirstDependensyService) { }

    getValue(index: number): string {
        return this.firstDependencyService.returnValue(index);
    }

    getIndex(): number {
        return 2;
    }
}
