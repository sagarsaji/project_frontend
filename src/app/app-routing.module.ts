import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddmenuComponent } from './admin-dashboard/addmenu/addmenu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateComponent } from './admin-dashboard/create/create.component';
import { ListComponent } from './admin-dashboard/list/list.component';
import { SpecificmenuComponent } from './admin-dashboard/specificmenu/specificmenu.component';
import { KitchenstaffDashboardComponent } from './kitchenstaff-dashboard/kitchenstaff-dashboard.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'admin', component: AdminDashboardComponent},
  {path:'user', component: UserDashboardComponent},
  {path:'kitchen', component: KitchenstaffDashboardComponent},
  {path:'create',component:CreateComponent},
  {path:'product',component:ListComponent},
  {path:'about',component:AboutComponent},
  {path:'addmenu',component:AddmenuComponent},
  {path:'menu',component:MenuComponent},
  {path:'viewmenu/:restname',component:SpecificmenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
