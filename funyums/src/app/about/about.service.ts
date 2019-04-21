import {Injectable} from '@angular/core';
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {commits} from './commits-interface';
import {issues} from './commits-interface';

@Injectable()
export class AboutService{



    constructor(private http:HttpClient){}

    getCommits(pgnum:number) : Observable<commits[]>{
        console.log("getting commits from backend")
        return this.http.get<commits[]>("https://api.github.com/repos/rododavid19/461L-FunYums-/commits?page=" + pgnum + "&per_page=100&access_token=767f2b5bf0f53943d9b033dbeebaa75f4746928a");
    }

    getIssues() : Observable<issues[]>{
        console.log("getting data from backend")
        return this.http.get<issues[]>("https://api.github.com/repos/rododavid19/461L-FunYums-/issues?state=all&per_page=100&access_token=767f2b5bf0f53943d9b033dbeebaa75f4746928a");
    }


    
}