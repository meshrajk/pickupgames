import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameComponent } from './components/game/game.component';
import { LoginComponent } from './components/login/login.component';
import { PickupgameComponent } from './components/pickupgame/pickupgame.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginFormComponent } from './components/shared/login-form/login-form.component';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatMenuModule } from '@angular/material/menu'
import { MatGridListModule } from '@angular/material/grid-list'

import { ReactiveFormsModule } from '@angular/forms';
import { GameformsComponent } from './components/addedit/gameforms/gameforms.component';
import { PickupgameformsComponent } from './components/addedit/pickupgameforms/pickupgameforms.component';
import { AddressformsComponent } from './components/addedit/addressforms/addressforms.component';
import { PickupgameCardComponent } from './components/pickupgame-card/pickupgame-card.component';
import { AddressCardComponent } from './components/address-card/address-card.component';

import { AuthModule } from '@auth0/auth0-angular';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GameComponent,
    LoginComponent,
    PickupgameComponent,
    LayoutComponent,
    LoginFormComponent,
    GameformsComponent,
    PickupgameformsComponent,
    AddressformsComponent,
    PickupgameCardComponent,
    AddressCardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule,
    AuthModule.forRoot({
      domain: 'dev-pur52c3g0ls2jjq3.us.auth0.com',
      clientId: 'uoQ8smSGwrYCWl5mtJCi3bEimmDBdc1I'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
