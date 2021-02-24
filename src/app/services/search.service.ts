import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface Search {};

@Injectable()
export class SearchService
{
    public api = 'https://api.github.com/users';
      
    constructor( private http: HttpClient ) {
        console.log('Api github services');
    }

    getSearch(search): Observable<Search[]>{
        return this.http.get<Search[]>(`${this.api}/${search}/repos`);
    }
    
}
