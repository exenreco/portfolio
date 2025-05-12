import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 100, completeWords = true, ellipsis = '...'): string {
    if (!value) return '';

    if (value.length <= limit) return value;

    if (completeWords) {
      limit = value.slice(0, limit).lastIndexOf(' ');
    }

    return `${value.slice(0, limit)}${ellipsis}`;
  }
}
