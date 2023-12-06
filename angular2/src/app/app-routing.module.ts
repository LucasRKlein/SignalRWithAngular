import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { BasicChatComponent } from './components/basic-chat/basic-chat.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'chat', component: BasicChatComponent },
  { path: 'home', component: AppComponent },
  { path: '**', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
