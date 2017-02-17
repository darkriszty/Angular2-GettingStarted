import { Component, Input } from "@angular/core";

import { IProduct } from "./product";

@Component({
    moduleId: module.id,
    templateUrl: "product-detail.component.html"
})
export class ProductDetailComponent {
    pageTitle: string = "Product Detail";
    @Input() productDetail: IProduct;
}