import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SettingsBarComponent } from './components/home/settings-bar/settings-bar.component';
import { RoomPageComponent } from './components/room-page/room-page.component';
import { GuestDialogComponent } from './components/guest-dialog/guest-dialog.component';
import { GuestsPageComponent } from './components/guests-page/guests-page.component';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { StaffPageComponent } from './components/staff-page/staff-page.component';

import { ApiService } from './services/api.service';
import { RequestsDataService } from './services/requests-data.service';
import { HeadersInterceptor } from './interceptors/header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsBarComponent,
    RoomPageComponent,
    GuestDialogComponent,
    GuestsPageComponent,
    GuestPageComponent,
    ServicesPageComponent,
    StaffPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    RequestsDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
  ],
  entryComponents: [
    GuestDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
