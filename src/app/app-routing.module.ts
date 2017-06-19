import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AboutComponent }  from './about/about.component';
import { LinksComponent }   from './links/links.component';
import { ResumeComponent }      from './resume/resume.component';
import { UserComponent }      from './user/user.component';

const routes: Routes = [
    {
      path: 'resume',
      component: ResumeComponent
    },
    {
      path: 'links',
      component: LinksComponent
    },
    {
      path: 'user/:index',
      component: UserComponent
    }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
