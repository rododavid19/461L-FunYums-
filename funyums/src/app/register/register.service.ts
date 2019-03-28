import {Injectable} from '@angular/core';
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './Person';

@Injectable()
export class HelloService{

    url:"http://127.0.0.1:5000/v1";
    constructor(private http:HttpClient){
    }
    register():Observable<any>{
        console.log("getting data from backend")
        //return this.http.get('${this.url}/hello')
        return this.http.post("http://127.0.0.1:5000/v1"+"/register",Person)
    }
    
}