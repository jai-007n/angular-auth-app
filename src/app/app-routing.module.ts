import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ServiceComponent } from './admin/service/service.component';
import { AuthGuard } from './guard/auth.guard';
import { GuestGuard } from './guard/guest.guard';
import { ServicelistComponent } from './admin/servicelist/servicelist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
{ path: 'login', component: LoginComponent , canActivate:[GuestGuard],},
{
        path: '',
        component: LayoutComponent,
        canActivate:[AuthGuard],
        children: [
         { path: 'dashboard', component: DashboardComponent },
          { path: 'service/list', component: ServicelistComponent },
          { path: 'service/add', component: ServiceComponent },
          { path: 'service/edit/:id', component: ServiceComponent },
          // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to home
        ],
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
