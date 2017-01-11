import { DatePresentationPipe } from './date.pipe';

describe('DatePresentationPipe', () => {

  it('should not be null', () => {
    expect(DatePresentationPipe).toBeTruthy();
  });

  it('should return date', () => {
    const dt = new Date().toLocaleDateString();
    expect(DatePresentationPipe.dateOrDatetime(dt)).toBe('date');
  });

  it('should return datetime', () => {
    const dt = new Date();
    expect(DatePresentationPipe.dateOrDatetime(dt)).toBe('datetime');
  });

  it('datetime string should contain :', () => {
    const dt = new Date();
    expect(DatePresentationPipe.dateTime(dt).indexOf(':') !== -1).toBe(true);
  });

  it('date string should not contain :', () => {
    const dt = new Date().toLocaleDateString();
    expect(DatePresentationPipe.date(dt).indexOf(':') !== -1).toBe(false);
  });

});
