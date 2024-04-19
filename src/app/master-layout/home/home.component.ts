import { Component } from '@angular/core';
import { ContactusComponent } from '../contactus/contactus.component';
import { AboutComponent } from '../about/about.component';
import { BlogComponent } from '../blog/blog.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CustomersreviewComponent } from '../customersreview/customersreview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactusComponent,AboutComponent,BlogComponent,CategoriesComponent,CustomersreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
