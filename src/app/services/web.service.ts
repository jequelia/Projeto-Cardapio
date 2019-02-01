import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/HTTP';
import { API_URL } from 'src/environments/endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  
  // headers: Headers

  constructor(private http: HttpClient) {
      // this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
      
  }
  get(endpoint : string) : Observable<any>{
    return this.http.get(`${API_URL}${endpoint}`)
  }

  post(endpoint : string, object : any){
    console.log(JSON.stringify(object))
    return this.http.post(`${API_URL}${endpoint}`, JSON.stringify(object)).subscribe(
      res=>{console.log(res)}
    )
  }

  put(endpoint : string, id : string , object : any){
    return this.http.put(`${API_URL}${endpoint}/${id}`, object)
  }

  delete(endpoint : string, id : string){
    return this.http.delete(`${API_URL}${endpoint}/${id}`)
  }
}
