import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from './services/product.service';
import { Paginator } from './interfaces/paginator.interface';

declare const Liferay: any;

@Component({
	templateUrl: 
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/mkpl-inventory/app/app.component.html'
})
export class AppComponent implements OnInit{
	$paginator: Observable<Paginator>;
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

		// TODO Dummy this.paginator = this.productService.getProductList2(this.subsidiaryId);
	}

	onUpload() {
		// TODO service
	  	this.$paginator = this.productService.getProductList(this.subsidiaryId);
	}
}
