import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { KitchenstaffDashboardComponent } from './kitchenstaff-dashboard/kitchenstaff-dashboard.component';
import { CreateComponent } from './admin-dashboard/create/create.component';
import { ListComponent } from './admin-dashboard/list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddmenuComponent } from './admin-dashboard/addmenu/addmenu.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SpecificmenuComponent } from './admin-dashboard/specificmenu/specificmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    KitchenstaffDashboardComponent,
    CreateComponent,
    ListComponent,
    NavbarComponent,
    AddmenuComponent,
    AboutComponent,
    FooterComponent,
    MenuComponent,
    SpecificmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
