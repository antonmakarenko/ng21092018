import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICartProduct, selectAll, totalPrice, trueProductsCount } from '../../store/reducers/cart.reducer';
import { Observable } from 'rxjs';
import { DecrementProductInCart, IncrementProductInCart, RemoveProductFromCart } from '../../store/actions/cart.action';

@Component({
    selector: 'course-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    public products$!: Observable<ICartProduct[]>;
    public productsCount$!: Observable<number>;
    public totalPrice$!: Observable<number>;

    public isOpen = true;

    public constructor(
        private _store: Store<any>
    ) { }

    public ngOnInit(): void {
        this.products$ = this._store.select(selectAll);
        this.productsCount$ = this._store.select(trueProductsCount);
        this.totalPrice$ = this._store.select(totalPrice);
    }


    public removeProduct(product: ICartProduct) {
        this._store.dispatch(new RemoveProductFromCart(product));
    }

    public incrementProduct(product: ICartProduct) {
        this._store.dispatch(new IncrementProductInCart(product));
    }

    public decrementProduct(product: ICartProduct) {
        this._store.dispatch(new DecrementProductInCart(product));
    }


}
