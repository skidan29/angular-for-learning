import { SimpleService } from './simple.service';
import { CheckValueService } from './check-value.service';
import { TestBed } from '@angular/core/testing';

describe('Простой сервис', () => {
    let service: SimpleService;
    const fakeCheckValueService = { check: () => true };
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SimpleService,
                { provide: CheckValueService, useValue: fakeCheckValueService },
            ],
        });
        service = TestBed.inject(SimpleService);
    });
    it('должен создовать экземпляр класса', () => {

        expect(service).toBeTruthy();
    });
    it('должен сумировать дву чиса', () => {
        const sum = service.sum(1, 4);
        expect(sum).toBe(5);
    });
    it('должен возвращать undefined', () => {
        const sum = service.sum(1);
        expect(sum).toBeUndefined();
    });
    it('должен возвращать 22', () => {
        const sum = service.sum(undefined, 22);
        expect(sum).toBe(22);
    });

    it('#check should return true', () => {
        const value = service.check();
        expect(value).toBeTruthy();
    });
});
