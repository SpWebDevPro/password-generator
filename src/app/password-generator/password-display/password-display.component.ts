import { Component, Input } from '@angular/core';

@Component({
  selector: 'password-display',
  templateUrl: './password-display.component.html',
  styleUrls: ['./password-display.component.css'],
})
export class PasswordDisplayComponent {
  @Input('password')
  password?: string;
}
