import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(value: any,k: any,v:any,...args: any[]): any {
if (value !== null){
  
    return value.filter((i:any)=>{
      return i.k == v
    })
  
 
}
    return null;
  }

}
