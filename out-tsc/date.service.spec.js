"use strict";
var testing_1 = require('@angular/core/testing');
var date_service_1 = require('./date.service');
describe('DateService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [date_service_1.DateService]
        });
    });
    it('should not be null', testing_1.inject([date_service_1.DateService], function (dateService) {
        expect(dateService).toBeTruthy();
    }));
    it('should return date', testing_1.inject([date_service_1.DateService], function (dateService) {
        var dt = new Date().toLocaleDateString();
        expect(dateService.dateOrDatetime(dt)).toBe('date');
    }));
    it('should return datetime', testing_1.inject([date_service_1.DateService], function (dateService) {
        var dt = new Date();
        expect(dateService.dateOrDatetime(dt)).toBe('datetime');
    }));
    it('datetime string should contain :', testing_1.inject([date_service_1.DateService], function (dateService) {
        var dt = new Date();
        expect(dateService.dateTime(dt).indexOf(':') !== -1).toBe(true);
    }));
    it('date string should not contain :', testing_1.inject([date_service_1.DateService], function (dateService) {
        var dt = new Date().toLocaleDateString();
        expect(dateService.date(dt).indexOf(':') !== -1).toBe(false);
    }));
});
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-pipes/src/date.service.spec.js.map