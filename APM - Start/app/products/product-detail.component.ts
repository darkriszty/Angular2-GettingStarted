import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs/Subscription";

import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id,
    templateUrl: "product-detail.component.html"
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
    }

    private _sub: Subscription;
    pageTitle: string = "Product Detail";
    productDetail: IProduct;

    ngOnInit(): void {
        this._sub = this._route.params.subscribe(
            params => {
                let id = +params["id"];
                this.getProduct(id);
            }
        );
    }

    ngOnDestroy(): void {
        this._sub.unsubscribe();
    }

    onBack(): void {
        this._router.navigate(["/products"]);
    }

    getProduct(id: number) {
        this._productService
            .getProducts()
            .subscribe(
                products => {
                    this.productDetail = products.find(prod => prod.productId == id);
                    console.log(`got product '${this.productDetail.productName}'`);
                },
                error => console.log(<any> error)
            );
    }
}