import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmptyInventoryComponent } from './empty-inventory.component';
import { InputControlComponent } from './input-control.component';
import { InputFileComponent } from './input-file.component';
import { ModalComponent } from './modal.component';
import { ModalInfoBlockComponent } from './modal-info-block.component';
import { ModalInventoryComponent } from './modal-inventory.component';
import { ProductListComponent } from './product-list.component';
import { SearchComponent } from './search.component';
import { SelectControlComponent } from './select-control.component';
import { TableListComponent } from './table-list.component';
import { UploadModalComponent } from './upload-modal.component';

import { ShortLargeStringsPipe } from './pipes/short-large-strings.pipe';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		EmptyInventoryComponent,
		InputControlComponent,
		InputFileComponent,
		ModalComponent,
		ModalInfoBlockComponent,
		ModalInventoryComponent,
		ProductListComponent,
		SearchComponent,
		SelectControlComponent,
		TableListComponent,
		UploadModalComponent,
		ShortLargeStringsPipe
	],
	// exports: [ShortLargeStringsPipe],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [
		CurrencyPipe,
		ShortLargeStringsPipe
	],
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() {}
}
