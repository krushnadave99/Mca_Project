import {  Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from './home/home.component';
@Component({
    selector: 'app-master-layout',
    standalone: true,
    templateUrl: './master-layout.component.html',
    styleUrl: './master-layout.component.scss',
    imports: [RouterOutlet, FooterComponent,HeaderComponent,HomeComponent],
})
export class MasterLayoutComponent {
}
