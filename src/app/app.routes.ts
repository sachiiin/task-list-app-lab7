import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { GroceryComponent } from './grocery/grocery.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'grocery', component: GroceryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];
