import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'password-controls',
  templateUrl: './password-controls.component.html',
  styleUrls: ['./password-controls.component.css'],
})
export class PasswordControlsComponent {
  passwordToClipboard: boolean = false;

  @Output('generate')
  OnGenerateEvent = new EventEmitter();

  @Input('password')
  password?: string;

  OnClickGeneratePsw() {
    if (this.password) {
      this.ToggleMessageCopy();
    }
    this.OnGenerateEvent.emit();
  }

  OnClickCopy() {
    if (this.password) {
      navigator.clipboard.writeText(this.password).then(() => {
        this.ToggleMessageCopy();
      });
    }
  }

  ToggleMessageCopy() {
    this.passwordToClipboard = !this.passwordToClipboard;
  }
}
