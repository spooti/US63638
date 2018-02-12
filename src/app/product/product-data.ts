import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IProduct } from './product';

export class ProductData implements InMemoryDbService {

    createDb() {
        const products: IProduct[] = [
            {
                'id': 1,
                'productName': 'Product 01',
                'productCode': 'PRD01'
            },
            {
                'id': 2,
                'productName': 'Product 02',
                'productCode': 'PRD02'
            },
            {
                'id': 5,
                'productName': 'Product 03',
                'productCode': 'PRD03'
            },
            {
                'id': 8,
                'productName': 'Product 04',
                'productCode': 'PRD04'
            },
            {
                'id': 10,
                'productName': 'Product 05',
                'productCode': 'PRD05'
            }
        ];
        return { products };
    }
}
