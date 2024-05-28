import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, attributes: string[]): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return attributes.some(attribute => {
        // Handle nested properties like 'issues' which might be an array
        const itemAttribute = item[attribute];
        if (Array.isArray(itemAttribute)) {
          return itemAttribute.some(subItem => subItem.toLowerCase().includes(searchText));
        }
        return itemAttribute.toLowerCase().includes(searchText);
      });
    });
  }

}



