import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GET_PRODUCTS_PENDING, GetProductsError, GetProductsSuccess } from '../actions/products.action';
import { BASE_URL_TOKEN } from '../../config';

@Injectable()
export class ProductsEffects {
    // Listen for the 'LOGIN' action
    @Effect()
    products$: Observable<Action> = this.actions$.pipe(
        ofType(GET_PRODUCTS_PENDING),
        switchMap(() =>
            this._http.get(`${this._baseUrl}/products`)
                .pipe(
                    map((res: any) => new GetProductsSuccess(res.data)),
                    catchError((err) => of(new GetProductsError(err)))
                )
        )
    );

    constructor(
        private _http: HttpClient,
        @Inject(BASE_URL_TOKEN) private _baseUrl: string,
        private actions$: Actions
    ) {}
}
