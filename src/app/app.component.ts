import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductsService } from './products.service';

@Component({
    selector: 'course-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

    public logoImg = 'assets/img/logo.png';
    public text = '';

    public products$: Observable<IProduct[]>;


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

    public ngOnDestroy(): void {

    }
}
