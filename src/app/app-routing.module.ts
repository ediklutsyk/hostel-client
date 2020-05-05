import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoomPageComponent } from './components/room-page/room-page.component';
import { GuestsPageComponent } from './components/guests-page/guests-page.component';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { StaffPageComponent } from './components/staff-page/staff-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'room/:id', component: RoomPageComponent },
  { path: 'guests', component: GuestsPageComponent },
  { path: 'guest/:id', component: GuestPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'staff', component: StaffPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }