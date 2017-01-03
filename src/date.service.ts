import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DateService {
  dateTime(item) {
    return moment(new Date(item)).format('MMMM D, YYYY HH:mm:ss');
  }
  date(item) {
    return moment(new Date(item)).format('LL');
  }
  dateOrDatetime(item) {
    let mValue = moment(new Date(item));
    if (mValue.hours() > 0 || mValue.minutes() > 0 || mValue.seconds() > 0) {
      return 'datetime';
    } else {
      return 'date';
    }
  }
}
