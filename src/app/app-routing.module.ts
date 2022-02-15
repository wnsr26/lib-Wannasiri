import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/pages/book/book.component';
import { NewBookComponent } from './components/pages/bookadd/bookadd.component';
import { EditBookComponent } from './components/pages/bookedit/bookedit.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "book", component: BookComponent, canActivate:[AuthGuard]},
  { path: "book/new", component: NewBookComponent, canActivate:[AuthGuard]},
  { path: "book/edit/:id", component: EditBookComponent, canActivate:[AuthGuard]},
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
