import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { LinksComponent } from './links/links.component';

import { AppRoutingModule }     from './app-routing.module';
import { AboutRoutingModule }     from './about/about-routing.module';
import { UserComponent } from './user/user.component';
import { EarlyLifeComponent }  from './about/early-life.component';
import { CareerComponent }  from './about/career.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    LinksComponent,
    EarlyLifeComponent,
    CareerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
