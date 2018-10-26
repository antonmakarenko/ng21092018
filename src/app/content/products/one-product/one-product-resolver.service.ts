import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IProduct } from '../products.service';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_TOKEN } from '../../../config';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class OneProductResolverService implements Resolve<IProduct> {

    public constructor(
        private _http: HttpClient,
        private _router: Router,
        @Inject(BASE_URL_TOKEN) private _baseUrl: string,
    ) { }

    public resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<IProduct> {
        return this._http.get(`${this._baseUrl}/products/${route.params.id}`)
            .pipe(
                map((res: any) => res.data),
                catchError((_err) => {
                    this._router.navigate(['/products']);
                    return of(null);
                })
            );
    }
}
