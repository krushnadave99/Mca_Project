import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { AboutComponent } from './master-layout/about/about.component';
import { BlogComponent } from './master-layout/blog/blog.component';
import { CategoriesComponent } from './master-layout/categories/categories.component';
import { ContactusComponent } from './master-layout/contactus/contactus.component';

import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddFavoriteComponent } from './add-favorite/add-favorite.component';
import { HomeComponent } from './master-layout/home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: '',
    component: MasterLayoutComponent,
    children: [
      {
        path: 'home',
        component:HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      { path: 'contactus', component: ContactusComponent },
      { path: 'addto-cart', component: AddToCartComponent },
      { path: 'add-favorite', component: AddFavoriteComponent },
    ],
  },
];
