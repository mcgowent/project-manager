import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular' ;

import { AuthComponent } from './auth/auth.component';
import { TodoComponent } from './todo/todo.component';

/* Configure Amplify resources */
Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    // AmplifyAngularModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
