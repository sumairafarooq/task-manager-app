import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { LoginComponent} from './login/login.component'
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [{ path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
