import {Injectable} from '@angular/core';
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {person} from '../person';
import * as auth0 from 'auth0-js';
import {AppComponent} from '../app.component';
import { Router } from '@angular/router';


@Injectable()
export class LoginService{

    url:"http://127.0.0.1:5000/v1";
    constructor(private http:HttpClient, public router:Router){
    }
    register(data:any):Observable<any>{
        console.log("getting data from backend")
        //return this.http.get('${this.url}/hello')
        return this.http.post("http://127.0.0.1:5000/v1"+"/login",data)
    }


    getData(email) : Observable<person>{
        return this.http.get<person>("http://backend-237004.appspot.com/api/username_password/"+email);
    }

    public person : person;

    private _idToken: string = '';
    private _accessToken: string = '';
    private _expiresAt: number = 0;

    auth0 = new auth0.WebAuth({
        clientID: 'zQCy4ml8CR4tPoiO22w25NTy8hP83c7R',
        domain: 'funyumslogin.auth0.com',
        responseType: 'token id_token',
        redirectUri: 'http://www.funyums.net',//'http://localhost:4200/',
        scope: 'openid profile email'
    });

    get accessToken(): string {
        return this._accessToken;
      }
    
      get idToken(): string {
        return this._idToken;
      }
    
      public login(): void {
        this.auth0.authorize();
        
      }

      public handleAuthentication(): void {
        
        this.auth0.parseHash((err, authResult) => {
            
          if (authResult && authResult.accessToken && authResult.idToken) {
            window.location.hash = '';
            this.localLogin(authResult);
            AppComponent.displayLogin = false;
            AppComponent.displayLogout = true;
            
            console.log(authResult.idTokenPayload.email);

            

        this.getData(authResult.idTokenPayload.email)
        .subscribe(data => this.person=data[0], error => {}, () => {
            console.log("success");
        if(this.person == null){
            console.log("New user being created");
            this.person = new person();
            this.person.email = authResult.idTokenPayload.email;
            this.person.rank = 1;
            this.person.favorites = null;
            this.person.fullname = authResult.idTokenPayload.name;
            this.person.ingredients = null;

            this.http.post("http://backend-237004.appspot.com/api/username_password",
            {
            "email"     :   this.person.email,
            "rank"      :   this.person.rank,
            "favorites" :   this.person.favorites,
            "fullname"  :   this.person.fullname,
            "ingredients":  this.person.ingredients
            })
            .subscribe(
            data  => {
            console.log("POST Request is successful ", data);
        
            
            },
            error  => {
      

            }
      
            );

        }
        else{
            console.log("Previous user logged in")
            

        }

        AppComponent.saveInLocal("local",this.person);
        this.router.navigateByUrl("/splash");

        
      });















            console.log(authResult);
          } else if (err) {
            console.log(err);

            
          }
          else{
              if(authResult!=null){
                console.log(authResult);
                console.log(authResult.accessToken);
                console.log(authResult.idToken);
              }
             
          }
        });
      }
    
      private localLogin(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = (authResult.expiresIn * 1000) + Date.now();
        this._accessToken = authResult.accessToken;
        this._idToken = authResult.idToken;
        this._expiresAt = expiresAt;

        console.log(this._accessToken);
        console.log(this._idToken);
        console.log(this._expiresAt);
         


      }
    
      public renewTokens(): void {
        this.auth0.checkSession({}, (err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.localLogin(authResult);
          } else if (err) {
            alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
            this.logout();
          }
        });
      }
    
      public logout(): void {
        // Remove tokens and expiry time
        this._accessToken = '';
        this._idToken = '';
        this._expiresAt = 0;
        
        this.auth0.logout({
          return_to: window.location.origin
        });
      }
    
      public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        return this._accessToken && Date.now() < this._expiresAt;
      }
    
}