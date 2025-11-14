import { Component, OnInit } from '@angular/core';
import {faUser, faBroomBall,faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { RouterLink, RouterOutlet, Router, NavigationEnd} from "@angular/router";
import { filter } from 'rxjs';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-admin-panel',
  imports: [FontAwesomeModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent implements OnInit {
  faBroomBall = faBroomBall;
  faUser = faUser;
  faExclamationCircle = faExclamationCircle;
  isDashboardView: boolean = true;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.isDashboardView = event.urlAfterRedirects === '/admin';
    });
  }

}
