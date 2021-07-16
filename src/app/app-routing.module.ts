import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routing
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ReadUserComponent } from './pages/read-user/read-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';

const routes: Routes = [
  { path: '', component: ReadUserComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
