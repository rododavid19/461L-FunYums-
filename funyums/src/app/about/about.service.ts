import {Injectable} from '@angular/core';
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {commits} from './commits-interface';
import {issues} from './commits-interface';

@Injectable()
export class AboutService{

    commit_url = "https://api.github.com/repos/rododavid19/461L-FunYums-/commits?access_token=767f2b5bf0f53943d9b033dbeebaa75f4746928a";

    issue_url = "https://api.github.com/repos/rododavid19/461L-FunYums-/issues?state=all&access_token=767f2b5bf0f53943d9b033dbeebaa75f4746928a";

    constructor(private http:HttpClient){}

    getCommits() : Observable<commits[]>{
        console.log("getting commits from backend")
        return this.http.get<commits[]>(this.commit_url);
    }

    getIssues() : Observable<issues[]>{
        console.log("getting data from backend")
        return this.http.get<issues[]>(this.issue_url);
    }


    
}