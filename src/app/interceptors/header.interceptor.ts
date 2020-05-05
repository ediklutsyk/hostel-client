import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

    constructor(private router: Router) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const interceptHeaders = req.headers.set('Content-Type', 'application/json');

        const modifiedRequest = req.clone({ headers: interceptHeaders });
        return next.handle(modifiedRequest).pipe(map(res => {
            return res;
        }));
    }
}