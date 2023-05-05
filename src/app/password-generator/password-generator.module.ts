import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordControlsComponent } from './password-controls/password-controls.component';
import { PasswordDisplayComponent } from './password-display/password-display.component';
import { PasswordGeneratorService } from './password-generator.service';
import { PasswordSettingsComponent } from './password-settings/password-settings.component';

@NgModule({
  declarations: [
    PasswordControlsComponent,
    PasswordDisplayComponent,
    PasswordSettingsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    PasswordControlsComponent,
    PasswordDisplayComponent,
    PasswordSettingsComponent,
  ],
  providers: [PasswordGeneratorService],
})
export class PasswordGeneratorModule {}
