import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PasswordSettingsComponent } from './password-settings.component';
import { Settings } from '../../types';
import { FormsModule } from '@angular/forms';

describe('PasswordSettingsComponent', () => {
  it('should represents the initial ts settings in the html', async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordSettingsComponent],
      imports: [FormsModule],
    }).compileComponents();

    const fixture = TestBed.createComponent(PasswordSettingsComponent);
    fixture.autoDetectChanges(true);
    const component = fixture.componentInstance;

    await fixture.whenStable();

    if (component.length) {
      let lenghtInput = fixture.nativeElement.querySelector('#length');
      expect(lenghtInput.valueAsNumber).toEqual(component.length);
    }
    if (component.numbers) {
      let numbersinput = fixture.nativeElement.querySelector('#numbers');
      expect(numbersinput.checked).toBeTrue();
    }
    if (component.symbols) {
      let symbolsinput = fixture.nativeElement.querySelector('#symbols');
      expect(symbolsinput.checked).toBeTrue();
    }
    if (component.uppercase) {
      let uppercaseinput = fixture.nativeElement.querySelector('#uppercase');
      expect(uppercaseinput.checked).toBeTrue();
    }
  });
});

@Component({
  selector: 'fake-parent-input',
  template: `
    <password-settings
      (change-settings)="onChangeSettings($event)"
    ></password-settings>
  `,
})
class FakeParentComponent {
  onChangeSettings(settings: Settings) {}
}

describe('PasswordSettingsComponent | in ParentComponent', () => {
  it(`should emit an event with new settings 
      each time a user makes changes in html input`, async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordSettingsComponent, FakeParentComponent],
      imports: [FormsModule],
    }).compileComponents();

    const fixture = TestBed.createComponent(FakeParentComponent);
    fixture.autoDetectChanges(true);
    const component = fixture.componentInstance;

    const spy = spyOn(component, 'onChangeSettings');

    const inputLength =
      fixture.nativeElement.querySelector('input[name=length]');
    inputLength.valueAsNumber = 20;
    inputLength.dispatchEvent(new Event('change'));
    expect(spy).toHaveBeenCalledWith({
      length: 20,
      uppercase: false,
      numbers: false,
      symbols: false,
    });

    const inputSymbols = fixture.nativeElement.querySelector(
      'input[name=symbols]'
    );
    inputSymbols.checked = true;
    inputSymbols.dispatchEvent(new Event('change'));
    expect(spy).toHaveBeenCalledWith({
      length: 20,
      uppercase: false,
      numbers: false,
      symbols: true,
    });

    const inputNumbers = fixture.nativeElement.querySelector(
      'input[name=numbers]'
    );
    inputNumbers.checked = true;
    inputNumbers.dispatchEvent(new Event('change'));
    expect(spy).toHaveBeenCalledWith({
      length: 20,
      uppercase: false,
      numbers: true,
      symbols: true,
    });

    const inputUppercase = fixture.nativeElement.querySelector(
      'input[name=uppercase]'
    );
    inputUppercase.checked = true;
    inputUppercase.dispatchEvent(new Event('change'));
    expect(spy).toHaveBeenCalledWith({
      length: 20,
      uppercase: true,
      numbers: true,
      symbols: true,
    });
  });
});
