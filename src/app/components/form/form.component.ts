import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterLink, Router} from '@angular/router';
import {UserService } from '../../services/user.service';
import {FormsModule, NgForm} from '@angular/forms'
import { User } from '../../../../users/users';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form',
  imports: [RouterLink, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

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
    this.service.authenticateUser(user)
  }

  createUser():void{
    let user: User = {
      name: this.userName,
      password: this.password
    }

    this.service.createUser(user).subscribe({
      next: (response) => {
      console.log('Usuário criado com sucesso!', response);
      this.router.navigate(
        [],
        {
          queryParams: {}
        }
      )
    },
    error: (error) => {
      console.error('Erro ao criar usuário:', error);
    }
    });
  }

  submitHandler(form:NgForm): void{
    if(this.isNewUser){
      this.createUser();
      form.reset()
    }else{
      this.authenticateUser();
      form.reset()
    }
  }

  SnackBarHandler(): void{
    if(this.isNewUser){
      this.openSnackBar('Cadastro Concluido Com Sucesso')
    }else{
      this.openSnackBar('Login Concluido Com Sucesso')
    }
  }

  openSnackBar(message: string):void{
    this.snackbar.open(message, 'Ok', {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'

    });
  }


}
