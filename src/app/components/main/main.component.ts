import { Component } from '@angular/core';
import { SobreComponent } from "../sobre/sobre.component";
import { PassoAPassoComponent } from "../passo-a-passo/passo-a-passo.component";
import { FuncionamentoComponent } from "../funcionamento/funcionamento.component";

@Component({
  selector: 'app-main',
  imports: [SobreComponent, PassoAPassoComponent, FuncionamentoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
