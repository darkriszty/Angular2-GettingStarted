import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router) {

    }
    
    canActivate(route: ActivatedRouteSnapshot): boolean {
        // url is made of 2 pieces: "product" and the requested "id"
        let id = +route.url[1].path;

        if (isNaN(id) || id < 1){
            alert("Invalid product id");
            this._router.navigate(["/products"]);
            // abort navigation
            return false;
        }

        return true;
    }
}