import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct, products$ } from './data';
import { Observable } from 'rxjs';

@Component({
    selector: 'course-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

    public logoImg = 'assets/img/logo.png';
    public text = '';

    public products$: Observable<IProduct[]> = products$;


    public searchText(value: string): void {
        console.log(value);
        this.text = value;
    }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {

    }
}
