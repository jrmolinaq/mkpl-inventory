import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getProductList(providerId: number | string, page = 0, param = ''): Product[] {
    let p1: Product = {reference: 'ABCDE123', name: 'Producto 1', stock: 10, quality: 'GENUINE', price: 100000, 
    applicability: '', irs: '', validation: '', provider: '', notification: true, registerId: '', registerDate: '', externalSubsidiaryId: '', externalDataSendId: ''};
    let p2: Product = {reference: 'ABCDE456', name: 'Producto 2', stock: 20, quality: 'GENUINE', price: 200000, 
    applicability: '', irs: '', validation: '', provider: '', notification: true, registerId: '', registerDate: '', externalSubsidiaryId: '', externalDataSendId: ''};
    let p3: Product = {reference: 'ABCDE789', name: 'Producto 3', stock: 30, quality: 'GENUINE', price: 300000, 
    applicability: '', irs: '', validation: '', provider: '', notification: true, registerId: '', registerDate: '', externalSubsidiaryId: '', externalDataSendId: ''};

    return  Math.random() >= 0.5? [p1, p2, p3]: [];
  }
}
