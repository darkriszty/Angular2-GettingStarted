import { Component, OnInit } from "@angular/core";

import { IProduct } from "./product";
import { ProductService} from "./product.service";

@Component({
    selector: "pm-products",
    moduleId: module.id,
    templateUrl: "product-list.template.html",
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private _productService: ProductService) {
    }

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    imageShown: boolean = false;
    listFilter: string;
    products: IProduct[] = [];

    toogleImage(): void {
        this.imageShown = !this.imageShown;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}