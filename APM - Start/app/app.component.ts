import { Component } from '@angular/core';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Acme Product Management</h1>
        <div>
            <pm-products></pm-products>
        </div>
    `,
    providers: [
        ProductService
    ]
})
export class AppComponent { }
