import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login/login.component';
import { HeaderComponent } from './layout/header/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ServiceComponent } from './admin/service/service.component';
import { AuthGuard } from './guard/auth.guard';
import { GuestGuard } from './guard/guest.guard';
import { tokenInterceptorInterceptor } from './interceptors/tokenInterceptor.interceptor';
import { ServicelistComponent } from './admin/servicelist/servicelist.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LayoutComponent,
    ServiceComponent,
    ServicelistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,

  ],
  providers: [
    provideHttpClient(withInterceptors([tokenInterceptorInterceptor]))
    , AuthGuard,
    GuestGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
