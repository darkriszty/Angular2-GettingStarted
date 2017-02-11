import { Pipe, PipeTransform } from "@angular/core";

import { IProduct } from "./product";

@Pipe({
    name: "productFilter"
})
export class ProductFilterPipe implements PipeTransform {
    transform(productsToFilter: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : "";
        return productsToFilter.filter(p => p.productName.toLocaleLowerCase().indexOf(filterBy) >= 0);
    }
}