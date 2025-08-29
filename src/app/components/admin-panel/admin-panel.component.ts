import { Component } from '@angular/core';
import {faUser, faBroomBall,faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-admin-panel',
  imports: [FontAwesomeModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  faBroomBall = faBroomBall;
  faUser = faUser;
  faExclamationCircle = faExclamationCircle;
}
