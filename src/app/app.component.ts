import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'course-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

    public logoImg = 'assets/img/logo.png';

    public searchText(value: string): void {
        console.log(value);
    }
}
