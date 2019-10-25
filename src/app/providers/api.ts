import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * @author ToanNguyen 2019-Oct-23 12:43
 */
@Injectable()
export class ApiProvider {
    public apiUrl = '';
    public imgUrl = '';

    constructor(private http: HttpClient) {
        if (environment.production) {
            let t = !environment.apiUrl.startsWith(location.origin) ? location.origin : '';
            this.apiUrl = t + environment.apiUrl;

            t = !environment.imgUrl.startsWith(location.origin) ? location.origin : '';
            this.imgUrl = t + environment.imgUrl;
        }
        else {
            this.apiUrl = environment.apiUrl;
            this.imgUrl = environment.imgUrl;
        }
    }

    /**
     * Support GET method
     * @param endpoint
     * @param params
     * @param reqOpts
     */
    public get(endpoint: string, params?: any, reqOpts?: any) {
        if (!reqOpts) {
            reqOpts = {
                params: new HttpParams()
            };
        }

        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new HttpParams();
            for (let i in params) {
                reqOpts.params.set(i, params[i]);
            }
        }

        return this.http.get(this.apiUrl + endpoint, reqOpts);
    }

    /**
     * Support POST method
     * @param endpoint
     * @param body
     * @param reqOpts
     */
    public post(endpoint: string, body: any, reqOpts?: any) {
        if (!reqOpts) {
            let t = new HttpHeaders().set('Content-Type', 'application/json');
            reqOpts = { headers: t };
        }

        return this.http.post(this.apiUrl + endpoint, body, reqOpts);
    }
}