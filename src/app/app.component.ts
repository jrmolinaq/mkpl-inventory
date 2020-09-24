import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from './services/product.service';
import { Paginator } from './interfaces/paginator.interface';
import { Product } from './interfaces/product.interface';

declare const Liferay: any;

@Component({
	templateUrl: 
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/mkpl-inventory/app/app.component.html'
})
export class AppComponent implements OnInit{
	// TODO se quita paginador   $paginator: Observable<Paginator>;
	$paginator: Observable<any>;
	subsidiaryId: number;
	canUpdateInventory: boolean;

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		// TODO: ver si tiene permiso para actualizar inventario
		this.canUpdateInventory = true;
  
		// TODO: traer el subsidiaryId
		this.subsidiaryId = 5;
  
		// TODO service
		this.$paginator = this.productService.getProductList(this.subsidiaryId);
		//this.$paginator = this.productService.getProductList3(this.subsidiaryId);
	}

	onUpload() {
		// TODO service
		 this.$paginator = this.productService.getProductList(this.subsidiaryId);
		//this.$paginator = this.productService.getProductList3(this.subsidiaryId);
	}
}
