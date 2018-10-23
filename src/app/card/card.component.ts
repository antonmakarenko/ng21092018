import { Component, Input } from '@angular/core';
import { IProduct } from '../products.service';

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


    private addition = 28;

    public constructor() {
        setTimeout(() => {
            this.addition = 2;
        }, 5000);
    }

    public dolarPrice(price: number): number {
        return price / this.addition;
    }
}
