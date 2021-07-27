import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result:number = 0;
  operation: {
    number1:number,
    number2:number,
    type:string,
  } = {number1:0, number2:0, type:"sum"}
  
  doOperation(){
    this.operation.number1 = parseInt(((document.getElementById("number1") as HTMLInputElement).value));
    this.operation.number2 = parseInt(((document.getElementById("number2") as HTMLInputElement).value));
    this.operation.type = ((document.getElementById("operationType") as HTMLSelectElement).value);
    switch (this.operation.type) {
      case 'add':
        this.result = this.operation.number1 + this.operation.number2
        break
      case 'subtract':
        this.result = this.operation.number1 - this.operation.number2
        break
      case 'multiply':
        this.result = this.operation.number1 * this.operation.number2
        break
    }

  }
}
