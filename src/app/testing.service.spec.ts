import { TestBed } from '@angular/core/testing';
import { TestingService } from './testing.service';
import { FirstDependensyService } from './first-dependensy.service';


describe('Test Service', () => {
    let service: TestingService;
    let firstService: FirstDependensyService;
    let firstDependencyReturnValueSpy: jasmine.Spy<(index: number) => string>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TestingService,
            ],
        });
        service = TestBed.inject(TestingService);
        firstService = TestBed.inject(FirstDependensyService);
        firstDependencyReturnValueSpy = spyOn(firstService, 'returnValue').and.returnValue('three');
    });


    it('init test service', () => {
        expect(service).toBeTruthy();
    });

    it('должен возврашать значение массива по индексу original', () => {
        const value = service.getValue(1);
        expect(value).toBe('three');
    });

    it('должен возврашать значение массива по индексу original with spy', () => {
        firstDependencyReturnValueSpy.and.callThrough();
        const value = service.getValue(2);
        expect(value).toBe('three');
    });

    it('должен возврашать значение массива по индексу', () => {
        firstDependencyReturnValueSpy.and.returnValue('three');
        const value = service.getValue(2);
        expect(value).toBe('three');
    });

    it('#getValue(#getIndex) should return three', () => {
        spyOn(service, 'getIndex').and.returnValue(0);
        const value = service.getValue(service.getIndex());
        expect(value).toBe('three');
    });
});
