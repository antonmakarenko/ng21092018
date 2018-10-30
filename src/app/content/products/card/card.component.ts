import { Component, Input } from '@angular/core';
import { IProduct } from '../../../store/reducers/products.reducer';
import { Store } from '@ngrx/store';
import { AddProductToCart } from '../../../store/actions/cart.action';

@Component({
    selector: 'course-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input()
    public product!: IProduct;

    @Input()
    public position!: number;

    @Input()
    public isOdd!: boolean;


    public constructor(
        private _store: Store<any>
    ) {
    }

    public dolarPrice(price: number): number {
        return price / 28;
    }

    public addToCart(product: IProduct): void {
        this._store.dispatch(new AddProductToCart(product));
    }
}
