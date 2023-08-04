import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlFormComponent } from './url/url-form/url-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: UrlFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
