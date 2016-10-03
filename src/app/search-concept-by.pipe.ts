import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchConceptBy'
})
export class SearchConceptByPipe implements PipeTransform {

  transform(cs: Array<any>, key: string): Array<any> {
    return cs.filter((o) => {
    	return (o.t).indexOf(key) > -1;
    })
  }

}
