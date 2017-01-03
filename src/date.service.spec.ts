import { TestBed, inject } from '@angular/core/testing';
import { DateService } from './date.service';

describe('DateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateService]
    });
  });

  it('should not be null', inject([DateService], (dateService: DateService) => {
    expect(dateService).toBeTruthy();
  }));

  it('should return date', inject([DateService], (dateService: DateService) => {
    const dt = new Date().toLocaleDateString();
    expect(dateService.dateOrDatetime(dt)).toBe('date');
  }));

  it('should return datetime', inject([DateService], (dateService: DateService) => {
    const dt = new Date();
    expect(dateService.dateOrDatetime(dt)).toBe('datetime');
  }));

  it('datetime string should contain :', inject([DateService], (dateService: DateService) => {
    const dt = new Date();
    expect(dateService.dateTime(dt).indexOf(':') !== -1).toBe(true);
  }));

  it('date string should not contain :', inject([DateService], (dateService: DateService) => {
    const dt = new Date().toLocaleDateString();
    expect(dateService.date(dt).indexOf(':') !== -1).toBe(false);
  }));
});
