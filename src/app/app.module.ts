import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/company.service';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { ContactService } from './contact/contact.service';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { AuthService } from './auth/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdToolbarModule,
  MdProgressBarModule,
  MdSelectModule
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    CompanyListComponent,
    ContactEditComponent,
    ContactListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    MdProgressBarModule,
    MdSelectModule
  ],
  providers: [
    AuthGuard,
    CompanyService,
    ContactService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
