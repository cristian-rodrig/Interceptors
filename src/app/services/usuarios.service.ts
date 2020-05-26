import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }



obtenerUsuarios(){

  let params = new HttpParams().append('page' , '2');
  params = params.append('nombre', 'Cristian Rodriguez');



  return this.http.get(`https://reqres.in/api/user`, {
    params,
    // headers
  }).pipe(    
    map( (resp : any) => resp.data),
    
  );
}


}