import {Injectable} from '@angular/core';
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {person} from '../person';

@Injectable()
export class AccountSettingsService{

    public URL:string;
    public person:person

    constructor(private http:HttpClient){}

    httpGet(){
        console.log("getting commits from backend")
        return this.http.get(this.URL);
    }

    httpPost(){
        this.http.patch("http://backend-237004.appspot.com/api/username_password/"+this.person.email,
            {
            "email"     :   this.person.email,
            "rank"      :   this.person.rank,
            "favorites" :   this.person.favorites,
            "fullname"  :   this.person.fullname,
            "ingredients":  this.person.ingredients
            })
            .subscribe(
            data  => {
            console.log("PATCH Request is successful ", data);
        
            
            },
            error  => {
      

            });
    }


    
}