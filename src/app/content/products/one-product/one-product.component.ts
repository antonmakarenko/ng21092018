import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProduct } from '../../../store/reducers/products.reducer';

@Component({
    selector: 'course-one-product',
    templateUrl: './one-product.component.html',
    styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

    public product$!: Observable<IProduct>;

    public constructor(
        private _activatedRoute: ActivatedRoute
    ) { }

    public ngOnInit() {
        this._activatedRoute.paramMap.subscribe((params) => {
            console.log(params);
        });
        this._activatedRoute.queryParamMap.subscribe((query) => {
            console.log(query);
        });
        this.product$ = this._activatedRoute.data.pipe(map((data) => data.product));
    }
}
