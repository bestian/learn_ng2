import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slash'
})
export class SlashPipe implements PipeTransform {

  transform(s: string, n: number): string {
    return s.split('/')[n || 0];
  }

}
