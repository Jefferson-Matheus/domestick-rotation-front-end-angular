import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router'
import {faArrowRotateLeft, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from '@angular/common';
import { ResponsibleService } from '../../services/responsibles/responsible.service';
import { Responsible } from '../../../../responsibles/responsible';

@Component({
  selector: 'app-responsibles',
  imports: [RouterLink, FontAwesomeModule, CommonModule],
  templateUrl: './responsibles.component.html',
  styleUrl: './responsibles.component.css'
})
export class ResponsiblesComponent implements OnInit {

  constructor(private responsibleService: ResponsibleService){}

  ngOnInit(): void {
    this.getAllResponsibles();
  }
  responsibles: Responsible[] = [];

  faArrowRotateLeft = faArrowRotateLeft;
  faTrash = faTrash;

  getAllResponsibles(){
    this.responsibleService.getAllResponsibles().subscribe({
      next: (response) => {
        console.log(response);
        this.responsibles = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
