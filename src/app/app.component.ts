import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  imports: 
  [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    MatSnackBarModule,
    MatInputModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'domestick-rotation-front-end';
}
