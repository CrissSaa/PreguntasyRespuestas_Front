import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = 'Criss';
  textoPlaceholder = 'escrba algo aqui';
  disabled = 'disabled';
  texto= 'Esto es un texto que cambiará';

  constructor(){
    setInterval(() => this.nombre = 'Crissito', 3000);
  }

  getSuma(num1: number, num2: number){
    return num1 + num2;
  }

  cambiarTexto(): void {
      this.texto='Aqui ya esta el texto cambiado';
  }

}
