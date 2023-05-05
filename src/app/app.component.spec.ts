import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PasswordGeneratorModule } from './password-generator/password-generator.module';
import { PasswordGeneratorService } from './password-generator/password-generator.service';

describe('AppComponent', () => {
  it('should display the password when user clicks on the generate button', async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [PasswordGeneratorModule],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges(true);

    const service = TestBed.inject(PasswordGeneratorService);
    const spy = spyOn(service, 'generate');
    spy.and.returnValue('MOCK_PASSWORD');

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    const spanMessage = fixture.nativeElement.querySelector(
      'span #passwordmessage'
    );
    expect(spanMessage).toBeDefined();
    if (spanMessage) {
      expect(spanMessage.textContent).toBe('MOCK_PASSWORD');
    }
  });
});
