import { Component } from '@angular/core';
import { PasswordGeneratorService } from './password-generator/password-generator.service';
import { Settings } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password?: string;
  length: number = 20;
  uppercase: boolean = false;
  numbers: boolean = false;
  symbols: boolean = false;

  constructor(private serviceGeneratorPassword: PasswordGeneratorService) {}

  OnClickGenerate() {
    this.password = this.serviceGeneratorPassword.generate({
      length: this.length,
      uppercase: this.uppercase,
      numbers: this.numbers,
      symbols: this.symbols,
    });
    console.table({
      length: this.length,
      uppercase: this.uppercase,
      numbers: this.numbers,
      symbols: this.symbols,
    });
  }

  onChangeSettings(obj: Settings) {
    this.length = obj.length;
    this.uppercase = obj.uppercase;
    this.numbers = obj.numbers;
    this.symbols = obj.symbols;
  }
}
