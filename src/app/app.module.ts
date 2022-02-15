import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { LoginComponent } from './components/pages/login/login.component';
import { BookComponent } from './components/pages/book/book.component';
import { NewBookComponent } from './components/pages/bookadd/bookadd.component';
import { EditBookComponent } from './components/pages/bookedit/bookedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AuthInterceptor } from './helper/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    BookComponent,
    NewBookComponent,
    EditBookComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
