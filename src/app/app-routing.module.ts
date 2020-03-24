import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './containers/contact/contact.component';
import { HomeComponent } from './containers/home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
