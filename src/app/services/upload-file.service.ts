import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UploadFileService {
  constructor(private http: HttpClient) { }

  // TODO Service
  uploadFile(file: File, extension: string, subsidiaryId: number): Observable<any> {
    let fileUrl: any;
    return this.http
      .get(
        `http://localhost:8080/o/ProviderCompraDigitalPortlet/api/catalogue/presigneds3?format=.${extension}`
      )
      .pipe(
        catchError(this.handleError),
        switchMap((response: any) => {
          fileUrl = response.fileUrl.split('/')[3];
          return this.http.put(response.url, file); // TODO revisar este endpoint
        }),
        catchError(this.handleError),
        switchMap(() => {
          return this.http.post(`http://localhost:8080/o/SendFileMKPLPortlet/sendfile/inventory`, {
            url: fileUrl,
            id_subsidiary: subsidiaryId
          });
        }),
        catchError(this.handleError),
        switchMap((response: any) => {
          if (!response.success) {
            return this.handleError();
          }
          return of(true);
        })
      );
  }

  /* TODO borrar Dummy
  uploadFile2(file: File, extension: string, subsidiaryId: number): any {
    let fileUrl: any;
    return true;
  }*/

  private handleError() {
    return throwError('Sucedió un error inesperado al subir el archivo');
  }

  // TODO Service
  uploadUnitaryProduct(body: any) {
    return this.http.post(`${environment.BACK_ENDPOINT}/irs_single_upload`, body);
  }

  /* TODO Borrar Dummy
  uploadUnitaryProduct(body: any) {
    return true;
  }*/
}
