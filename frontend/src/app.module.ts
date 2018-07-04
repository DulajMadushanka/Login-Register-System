import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule }from '@angular/common/http';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path : 'login',component:LoginComponent},
  {path : 'register',component:RegisterComponent},
  {path : 'user',component:UserhomeComponent},
  {path:'afooter',component:AppfooterComponent},
  {path:'dashboard',component:DashboardComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    AddBooksComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppheaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[RouterModule],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
