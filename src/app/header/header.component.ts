import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'course-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input()
    public logo!: string;

    @Output()
    public searchByText: EventEmitter<string> = new EventEmitter();


    constructor() { }

    ngOnInit() {
    }

    public search(event: KeyboardEvent) {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        this.searchByText.emit(input.value);
    }

}
