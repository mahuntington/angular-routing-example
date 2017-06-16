import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { LinksComponent } from './links/links.component';

import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
