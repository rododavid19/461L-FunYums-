import {Injectable} from '@angular/core';
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Policy} from './policy';


@Injectable()
export class LoginService{

    url:"http://127.0.0.1:5000/v1";
    constructor(private http:HttpClient){
    }
    register(data:any):Observable<any>{
        console.log("getting data from backend")
        //return this.http.get('${this.url}/hello')
        return this.http.post("http://127.0.0.1:5000/v1"+"/login",data)
    }


    getData() : Observable<Policy[]>{
        return this.http.get<Policy[]>("http://backend-237004.appspot.com/api/username_password");


    }
    
}