import * as moment from 'moment';

export class Helpers {
  static formatDate(aData: Date): string {
    return moment(aData).format('DD/MM/YYYY hh:mm');
  }
}
