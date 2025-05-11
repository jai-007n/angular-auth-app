import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ServiceComponent } from './admin/service/service.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
{ path: 'login', component: LoginComponent },
{
        path: '',
        component: LayoutComponent,
        children: [
         { path: 'dashboard', component: DashboardComponent },
          { path: 'service', component: ServiceComponent },
          // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to home
        ],
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
