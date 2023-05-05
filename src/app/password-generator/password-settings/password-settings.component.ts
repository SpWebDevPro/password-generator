import { Component, EventEmitter, Output } from '@angular/core';
import { Settings } from 'src/app/types';

@Component({
  selector: 'password-settings',
  templateUrl: './password-settings.component.html',
  styleUrls: ['./password-settings.component.css'],
})
export class PasswordSettingsComponent {
  @Output('change-settings')
  onChangeSettingsEvent = new EventEmitter<Settings>();

  length: number = 20;
  uppercase: boolean = false;
  numbers: boolean = false;
  symbols: boolean = false;

  onChangeSettings() {
    this.onChangeSettingsEvent.emit({
      length: this.length,
      uppercase: this.uppercase,
      numbers: this.numbers,
      symbols: this.symbols,
    });
  }
}
