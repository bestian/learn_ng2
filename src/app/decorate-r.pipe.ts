import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorateR'
})
export class DecorateRPipe implements PipeTransform {

  transform(r: string): string {
  	if (!r) return '';
  	if (r == 'Doc') return '官方說明書';
  	if (r == '*') return '這是ng2內建的';
    return r;
  }

}
