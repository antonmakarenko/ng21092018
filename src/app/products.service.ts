import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BASE_URL_TOKEN } from './config';

export interface IProduct {
    '_id': string;
    'title': string;
    'serial': number;
    'author': string;
    'price': number;
    'src': string;
}


export class ProductsService {

    constructor(
       @Inject(HttpClient) private _http: HttpClient,
       @Inject(BASE_URL_TOKEN) private _baseUrl: string,
    ) {
        console.log('INIT');
    }

    public getProducts(): Observable<IProduct[]> {
        return this._http.get(`${this._baseUrl}/products`)
            .pipe(map((res: { data: IProduct[] }) => res.data));
    }
}
