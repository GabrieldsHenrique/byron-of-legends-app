import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Formulario } from '../../dto/formulario.dto';

export const FormularioCadastro: Formulario[] = [
  {
    linha: [
      {
        className: '',
        type: 'text',
        formControlName: 'nome',
        placeholder: 'Nome',
        label: '',
      },
      {
        className: '',
        type: 'text',
        formControlName: 'email',
        placeholder: 'Email',
        label: '',
      },
      {
        className: '',
        type: 'password',
        formControlName: 'senha',
        placeholder: 'Senha',
        label: '',
      },
      {
        className: '',
        type: 'password',
        formControlName: 'confirmarSenha',
        placeholder: 'Confirmar senha',
        label: '',
      },
    ],
    className: 'w-full gap-x-4',
  },
];
export const FormBuilderCadastro: FormBuilder = new FormBuilder();

export const FormGroupCadastro = FormBuilderCadastro.group({
  nome: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email, VerificaEmail]],
  senha: ['', [Validators.required]],
  confirmarSenha: ['', [Validators.required]],
});


function VerificaEmail(control: AbstractControl) {
  let dominio = control.value.split('@')[1]

  if (dominio && dominio != 'byronsolutions.com') {
    return { 'dominioInvalido': true };
  }
  return null;
}


