import {Injectable} from '@angular/core';
import {HttpClient,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {person} from '../person';




@Injectable()
export class RegisterService{


    constructor(private http: HttpClient) {}

}

