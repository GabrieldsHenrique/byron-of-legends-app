import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Formulario } from 'src/core/dto/formulario.dto';
import {
  FormGroupCadastro,
  FormularioCadastro,
} from 'src/core/formularios/cadastro-usuario/formularioCadastro.model';
import { CampoComponent } from 'src/shared/formulario/campo/campo.component';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CampoComponent,
    RouterModule,
  ],
})
export class CadastrarPage implements OnInit {
  form = FormGroupCadastro;
  estrututaFormLogin: Formulario[] = FormularioCadastro;

  constructor() {}

  ngOnInit(): void {
    this.form.controls.senha.valueChanges.subscribe((value) => {
      console.log(value)
      if(value != this.form.controls.confirmarSenha.value){
        this.form.controls.senha.setErrors({ 'senhaIncompativel': true });
      }else{
        this.form.controls.senha.setErrors(null);
        this.form.controls.confirmarSenha.setErrors(null)
      }
    });


    this.form.controls.confirmarSenha.valueChanges.subscribe((value) => {
      if(value != this.form.controls.senha.value){
        this.form.controls.confirmarSenha.setErrors({ 'senhaIncompativel': true });
      }else{
        this.form.controls.confirmarSenha.setErrors(null);
        this.form.controls.senha.setErrors(null);
      }
    });
  }
}
