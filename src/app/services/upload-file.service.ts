import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UploadFileService {
  constructor(private http: HttpClient) { }

  uploadFile(file: File, extension: string, subsidiaryId: number): Observable<any> {
    let fileUrl: any;
    return this.http
      .get(
        `http://localhost:8080/o/ProviderCompraDigitalPortlet/api/catalogue/presigneds3?format=.${extension}`
      )
      .pipe(
        catchError(this.handleError),
        switchMap((response: any) => {
          fileUrl = response.fileURL.split('/')[3];
          let a = this.http.put(response.url, file);
          return a;
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
            return this.handleError(response.message);
          }
          return of(true);
        })
      );
  }

  private handleError(message = '') {
    if(message == ''){
      message = 'Sucedió un error inesperado al subir el archivo';
    }

    return throwError(message);
  }

  // TODO Service
  uploadUnitaryProduct(body: any) {
    return this.http.post(`https://4vt3v6gcpc.execute-api.us-east-1.amazonaws.com/qa/single-inventory`, body);
  }
}
