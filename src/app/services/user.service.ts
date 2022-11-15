import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  loggedInUser: User | undefined;
  constructor(private auth: AuthService) {
    this.auth.user$.subscribe((res: any) => this.loggedInUser = res as User)
  }

  get CurrentUser() {
    return this.loggedInUser;
  }
}
