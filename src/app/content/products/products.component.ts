import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductsService } from './products.service';

@Component({
    selector: 'course-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public products$!: Observable<IProduct[]>;
    public text = '';

    public constructor(
        private _productsService: ProductsService
    ) {


    }


    public searchText(value: string): void {
        console.log(value);
        this.text = value;
    }

    public ngOnInit(): void {
        this.products$ = this._productsService.getProducts();
    }

}
