import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [							
    AppComponent,
      TopBarComponent,
      WidgetListComponent,
      LoginComponent,
      RegisterUserComponent,
      ResetPwdComponent,
      UserInfoComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: WidgetListComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
