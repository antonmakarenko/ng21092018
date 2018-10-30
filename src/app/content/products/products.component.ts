import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../store/reducers/products.reducer';
import { Store } from '@ngrx/store';

@Component({
    selector: 'course-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public products$!: Observable<IProduct[]>;
    public text = '';

    public constructor(
        private _store: Store<any>
    ) {


    }


    public searchText(value: string): void {
        console.log(value);
        this.text = value;
    }

    public ngOnInit(): void {
         this.products$ = this._store.select('products');
    }



}
