import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { Material } from './models/material.model';    

@Injectable({
    providedIn: 'root'
})

export class MaterialService{
    
    url: string = "http://localhost:8080";
    
    constructor(private http: HttpClient){}

   todosClientes(): Observable<Material[]>{
    return this.http.get<Material[]>(`${this.url}/material`)
    .pipe(
        tap( res =>{
            console.log(res)
        }),
        catchError(this.handleError)
    )
   }


   handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


   
}