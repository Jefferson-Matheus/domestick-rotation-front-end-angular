import { Component } from '@angular/core';
import {faUser, faBroomBall,faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { RouterLink, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-admin-panel',
  imports: [FontAwesomeModule, RouterLink, RouterOutlet],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  faBroomBall = faBroomBall;
  faUser = faUser;
  faExclamationCircle = faExclamationCircle;
}
