"use strict";
var date_pipe_1 = require('./date.pipe');
describe('DatePresentationPipe', function () {
    it('should not be null', function () {
        expect(date_pipe_1.DatePresentationPipe).toBeTruthy();
    });
    it('should return date', function () {
        var dt = new Date().toLocaleDateString();
        expect(date_pipe_1.DatePresentationPipe.dateOrDatetime(dt)).toBe('date');
    });
    it('should return datetime', function () {
        var dt = new Date();
        expect(date_pipe_1.DatePresentationPipe.dateOrDatetime(dt)).toBe('datetime');
    });
    it('datetime string should contain :', function () {
        var dt = new Date();
        expect(date_pipe_1.DatePresentationPipe.dateTime(dt).indexOf(':') !== -1).toBe(true);
    });
    it('date string should not contain :', function () {
        var dt = new Date().toLocaleDateString();
        expect(date_pipe_1.DatePresentationPipe.date(dt).indexOf(':') !== -1).toBe(false);
    });
});
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-pipes/src/date.pipe.spec.js.map