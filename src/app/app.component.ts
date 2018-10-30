import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetProductsPending } from './store/actions/products.action';

@Component({
    selector: 'course-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

    public logoImg = 'assets/img/logo.png';

    public constructor(
        private _store: Store<any>
    ) {}

    public ngOnInit(): void {
        this._store.dispatch(new GetProductsPending());
    }

}
