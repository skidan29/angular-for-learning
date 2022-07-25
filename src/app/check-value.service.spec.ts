import { CheckValueService } from './check-value.service';
import { TestBed } from '@angular/core/testing';


describe('CheckValueService', () => {
    let service: CheckValueService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CheckValueService],
        });
        service = TestBed.inject(CheckValueService);
    });
    it('class init', () => {
        expect(service).toBeTruthy();
    });

    it('#check should return true', () => {
        const value = service.check();
        expect(value).toBe(true);
    });

});
