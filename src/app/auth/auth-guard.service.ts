import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService) { }
  canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated$
      .pipe(map((loggedIn: any) => {
        console.log('!this.auth.isAuthenticated$', loggedIn);
        if (!loggedIn) {
          this.auth.loginWithRedirect();
          return false;
        }
        return true;
      }));
  }
}