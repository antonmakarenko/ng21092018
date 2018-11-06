import { ProductsFilterPipe } from './products-filter.pipe';
import { IProduct } from '../../store/reducers/products.reducer';

const products: IProduct[] = [
    {
        _id: '1',
        title: 'AAAA',
        'serial': 12312,
        'author': 'Puma',
        'price': 1234,
        'src': 'img/1',
    },
    {
        _id: '2',
        title: 'BBBB',
        'serial': 12312,
        'author': 'Reebok',
        'price': 1234,
        'src': 'img/1',
    }
];


describe('ProductsFilterPipe', () => {
    let pipe: ProductsFilterPipe;

    beforeEach(() => {
        pipe = new ProductsFilterPipe();
    });

    it('should ', () => {
        expect(pipe.transform(products, 'Reebok').length)
            .toBe(1);
        expect(pipe.transform(products, 'Reebok'))
            .toEqual([products[1]]);
    });
});
