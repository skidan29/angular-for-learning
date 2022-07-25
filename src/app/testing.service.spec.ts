import { TestBed } from '@angular/core/testing';
import { TestingService } from './testing.service';
import { FirstDependensyService } from './first-dependensy.service';

describe('Test Service', () => {
    let service: TestingService;
    let firstService: FirstDependensyService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TestingService,
            ],
        });
        service = TestBed.inject(TestingService);
        firstService = TestBed.inject(FirstDependensyService);
    });


    it('init test service', () => {
        expect(service).toBeTruthy();
    });

    it('должен возврашать значение массива по индексу original', () => {
        const value = service.getValue(2);
        expect(value).toBe('three');
    });

    it('должен возврашать значение массива по индексу original with spy', () => {
        spyOn(firstService, 'returnValue').and.callThrough();
        const value = service.getValue(2);
        expect(value).toBe('three');
    });

    it('должен возврашать значение массива по индексу', () => {
        spyOn(firstService, 'returnValue').and.returnValue('three');
        const value = service.getValue(2);
        expect(value).toBe('three');
    });

});
