import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id,
    templateUrl: "product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
        
    }

    pageTitle: string = "Product Detail";
    productDetail: IProduct;

    ngOnInit(): void {
        let id = +this._route.snapshot.params["id"];
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(["/products"]);
    }
}