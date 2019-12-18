import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClientJsonpModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import {AppRoutingModule  } from './app.routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginModule } from './login/login.module';
import { API_URL, ApiUrlInterceptor } from './common/interceptors/ApiUrlInterceptor ';
import { environment } from 'src/environments/environment';
import { HighlightDirective } from './common/directives/highlight.directive';
import { ControlsModule } from './controls/controls.module';
import { UserModule } from './user/user.module';
import { TokenInterceptor } from './common/interceptors/TokenInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    HighlightDirective,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    LoginModule,
    UserModule,
    AppRoutingModule,
    ControlsModule
    
  ],
  exports:[
  ],
  providers: [
    {provide: API_URL, useValue: environment.apiUrl},
    {provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true, deps: [API_URL]}
    //,{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
