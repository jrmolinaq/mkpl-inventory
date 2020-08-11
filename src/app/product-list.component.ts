import { Component, OnInit, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ProductService } from './services/product.service';
import { ModalService } from './services/modal.service';
import { Product } from './interfaces/product.interface';
import { Paginator, DataPaginator } from './interfaces/paginator.interface';

import { TABLE_HEADERS } from './constants/product-list-constants';

declare const Liferay: any;

@Component({
  selector: 'product-list',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-inventory/app/product-list.component.html'
})
export class ProductListComponent implements OnInit {
  @Input() subsidiaryId: number;
  canUpdateInventory = false;
  canReadInventory = false;
  products: Product[];
  dataToPaginate: DataPaginator;
  inventoryDate: string;
  param: string;
  configTable = TABLE_HEADERS;
  modifiers = {
    price: {
      resolver: (value: any) => this.currencyPipe.transform(value, 'COP', '$ ', '.0-0')
    },
    reference: {
      style: 'bold'
    }
  };
  @Input() paginator: Product[];

  constructor(
    private productService: ProductService,
    private currencyPipe: CurrencyPipe,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.products = this.paginator;
    //this.dataToPaginate = this.paginator.dataPaginator;
    this.inventoryDate = '2020-07-31';

    // TODO: permisos de sesión y arreglar paginator e inventoryDate
    this.canUpdateInventory = true;
    this.canReadInventory = true;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  currentPageChange($event: any) {
    /*
    this.router
      .navigate([], {
        queryParams: {
          ...this.activeRoute.snapshot.parent.queryParams,
          page: $event
        }
      })
      .then(() => {
        this.getProductList();
      });
    */
  }

  searchItem($event: any) {
    /*
    this.router.navigate([], { queryParams: { param: $event } }).then(() => {
      this.getProductList();
    });
    */
  }

  getProductList() {
    /*const {
      page = 0,
      param = ''
    } = this.activeRoute.snapshot.parent.queryParams;*/
    

    this.products = this.productService.getProductList(this.subsidiaryId, 0, '');
    //this.dataToPaginate = dataPaginator;
    this.inventoryDate = '2020-07-31';
    
  }
}
