import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

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
    errorMessage: string;

    toogleImage(): void {
        this.imageShown = !this.imageShown;
    }

    ngOnInit(): void {
        this._productService
            .getProducts()
            .subscribe(
                p => this.products = p, 
                error => this.errorMessage = <any> error
            );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}