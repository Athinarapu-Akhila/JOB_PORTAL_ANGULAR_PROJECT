import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { Tab4Component } from './tab4/tab4.component';
import { ProfileComponent } from './profile/profile.component';
//import {MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DetailsComponent,
    HomeComponent,
    MainComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Component,
    ProfileComponent
  ],
 
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    //NgbModule,
    //MdbTabsModule,
    //NgModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '',component: HomeComponent, pathMatch: 'full' },
      {path:'main' ,component: MainComponent },
      {path:'details',component:DetailsComponent},
      {path:'register',component: RegisterComponent},
      {path:'tab1',component:Tab1Component},
      {path:'tab2',component:Tab2Component},
      {path:'tab3',component:Tab3Component},
      {path:'tab4',component:Tab4Component},
      {path:'profile',component:ProfileComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
