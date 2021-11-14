import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  newspaperapi= "https://newsapi.org/v2/top-headlines?country=in&apiKey=5dc3e94d3bb0417bb19aaa90cd308525";
  newspaperapibusiness= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5dc3e94d3bb0417bb19aaa90cd308525";
  newspaperapitechnology= "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5dc3e94d3bb0417bb19aaa90cd308525";
  newspaperapientertainment= "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5dc3e94d3bb0417bb19aaa90cd308525";

  newspaper():Observable<any>{
    return this._http.get(this.newspaperapi)
  }

  newspaperbusiness():Observable<any>{
    return this._http.get(this.newspaperapibusiness)
  }

  newspapertechnology():Observable<any>{
    return this._http.get(this.newspaperapitechnology)
  }

  newspaperintertainment():Observable<any>{
    return this._http.get(this.newspaperapientertainment)
  }



}
