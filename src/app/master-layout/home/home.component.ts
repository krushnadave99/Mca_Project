import { Component, OnInit } from '@angular/core';
import { ContactusComponent } from '../contactus/contactus.component';
import { AboutComponent } from '../about/about.component';
import { BlogComponent } from '../blog/blog.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CustomersreviewComponent } from '../customersreview/customersreview.component';
import * as AOS from "aos";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactusComponent, AboutComponent, BlogComponent, CategoriesComponent, CustomersreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });//AOS - 2
    AOS.refresh();
  }

}