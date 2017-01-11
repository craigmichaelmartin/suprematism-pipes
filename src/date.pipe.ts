import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'datePresentation' })
export class DatePresentationPipe implements PipeTransform {

  static dateTime(item) {
    return moment(new Date(item)).format('MMM D, YYYY HH:mm');
  }

  static date(item) {
    return moment(new Date(item)).format('ll');
  }

  static dateOrDatetime(item) {
    const mValue = moment(new Date(item));
    if (mValue.hours() > 0 || mValue.minutes() > 0 || mValue.seconds() > 0) {
      return 'datetime';
    }
    return 'date';
  }

  static getPresentationDate(item) {
    const which: string = DatePresentationPipe.dateOrDatetime(item);
    if (which === 'datetime') {
      return DatePresentationPipe.dateTime(item);
    }
    return DatePresentationPipe.date(item);
  }

  transform(item) {
    return DatePresentationPipe.getPresentationDate(item);
  }

}
