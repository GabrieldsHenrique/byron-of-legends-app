import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormGroupLogin, FormularioLoginSimples } from 'src/core/formularios/login/formularioLogin.model';
import { Formulario } from 'src/core/dto/formulario.dto';
import { CampoComponent } from 'src/shared/formulario/campo/campo.component';
import { RouterModule } from '@angular/router';
import { FormGroupCadastro } from 'src/core/formularios/cadastro-usuario/formularioCadastro.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, CampoComponent, ReactiveFormsModule, RouterModule]
})
export class LoginPage {

  constructor() {

   }

  form = FormGroupLogin;
  estrututaFormLogin: Formulario[] = FormularioLoginSimples;






}
