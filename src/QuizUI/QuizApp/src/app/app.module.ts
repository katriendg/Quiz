import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';

import { ConfigService } from './config-service.service';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { SettingsComponent } from './settings/settings.component';
import { QuizProviderService } from './quiz-provider.service';
import { AttemptComponent } from './attempt/attempt.component';
import { AttemptNavigatorService } from './attempt-navigator.service';
import { AttemptProviderService } from './attempt-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    QuizAppComponent,
    SettingsComponent,
    AttemptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ConfigService,
    QuizProviderService,
    AttemptProviderService,
    AttemptNavigatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
