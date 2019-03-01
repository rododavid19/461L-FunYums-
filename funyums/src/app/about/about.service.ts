import {Injectable} from '@angular/core';
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AboutService{

    url:"https://api.github.com/repos/rododavid19/461L-FunYums-/commits?access_token=767f2b5bf0f53943d9b033dbeebaa75f4746928a";
    constructor(private http:HttpClient){
    }
    getAbout():Observable<any>{
        console.log("getting data from backend")
        //return this.http.get('${this.url}/hello')
        return this.http.get("https://api.github.com/repos/rododavid19/461L-FunYums-/commits?access_token=767f2b5bf0f53943d9b033dbeebaa75f4746928a")
    }
    
}