import { Component } from '@angular/core';

import { ProductListComponent } from './products/product-list.component';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Acme Product Management</h1>
        <div>
            <pm-products></pm-products>
        </div>
    `
})
export class AppComponent { }
