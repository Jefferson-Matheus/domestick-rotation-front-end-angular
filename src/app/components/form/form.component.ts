import { Component, OnInit, signal, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute,RouterLink, Router} from '@angular/router';
import {UserService } from '../../services/user.service';
import {FormsModule, NgForm} from '@angular/forms'
import { User } from '../../../../users/users';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormField, MatInput, MatInputModule } from "@angular/material/input";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-form',
  imports: [
    RouterLink, 
    FormsModule, 
    MatInput, 
    MatInputModule,
    MatIcon,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  @ViewChild('f') form: NgForm | undefined;

  constructor(
    private routerQuery: ActivatedRoute,
    private service: UserService,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  isNewUser: boolean = false;

  h2Text: string = "Entrar";
  buttonText: string = "Login";

  userName:string = "";
  password:string = "";




  ngOnInit(): void {
    this.routerQuery.queryParams.subscribe(params => {
      this.isNewUser = params["novo_usuario"] === "true"
      this.form?.resetForm();

      if (this.isNewUser){
        this.h2Text = "Novo Usuario"
        this.buttonText = "Cadastrar"
      }else{
        this.h2Text = "Entrar"
        this.buttonText = "Login"
        console.log("Passou aqui")
      }

    });
  }

  authenticateUser():void{
    let user: User = {
      name: this.userName,
      password: this.password
    }
    this.service.authenticateUser(user);
    
  }

  createUser(form:NgForm):void{
    let user: User = {
      name: this.userName,
      password: this.password
    }

    this.service.createUser(user).subscribe({
      next: (response) => {
      console.log('Usuário criado com sucesso!', response);
      this.openSnackBar('Cadastro Concluido Com Sucesso');
      this.router.navigate(
        [],
        {
          queryParams: {}
        }
      );
      form.reset();
    },
    error: (error) => {
      console.error('Erro ao criar usuário:', error);
      this.openSnackBar('Erro ao tentar criar um novo usuario');
    }
    });
  }

  submitHandler(form:NgForm): void{
    if(this.isNewUser){
      this.createUser(form);
    }else{
      this.authenticateUser();
      form.reset();
    }
  }

  openSnackBar(message: string):void{
    this.snackbar.open(message, 'Ok', {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'

    });
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


}
