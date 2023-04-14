import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [
  {
    component: AddRestoComponent,
    path:'add'
  },
   {
    component: UpdateRestoComponent,
    path:'update/:id'
   },
   {
    component: ListRestoComponent,
    path:'list'
   },
   {
    component: LoginUserComponent,
    path:'login'
   },
   {
    component: RegisterUserComponent,
    path:'register'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
