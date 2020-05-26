import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
  const headers = new HttpHeaders({
  'token-usuario': 'adsamfn231435234dsafas21'
  });

  const reqClone = req.clone({
    headers
  });

    return next.handle(reqClone).pipe(
      catchError( this.manejarError)
    )
  }

  //metodo para menjar errores http
  manejarError(error: HttpErrorResponse){
    console.log('sucedio un error');
      console.log('registrado en el logFile');
      console.warn(error)
      return throwError('Error personaizado');
  }

}
