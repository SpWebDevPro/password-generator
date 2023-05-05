import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PasswordDisplayComponent } from './password-display.component';

describe('PasswordDisplayComponent', () => {
  it('should initially display : Cliquez sur le bouton "Générer"', () => {
    TestBed.configureTestingModule({
      declarations: [PasswordDisplayComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(PasswordDisplayComponent);
    fixture.autoDetectChanges();

    const component = fixture.componentInstance;

    const initialMessageSpan =
      fixture.nativeElement.querySelector('article>span');
    expect(initialMessageSpan.innerText).toBe(
      'Cliquez sur le bouton "Générer"'
    );
  });
});

@Component({
  selector: 'parent-test',
  template: `
    <password-display [password]="'MOCK_PASSWORD'"></password-display>
  `,
})
class FakeParentComponent {}

describe('PasswordDisplayComponent | in ParentComponent', () => {
  it('should display Password given through input', async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeParentComponent, PasswordDisplayComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(FakeParentComponent);
    fixture.autoDetectChanges();
    const component = fixture.componentInstance;

    const messageSpan = fixture.nativeElement.querySelector('#passwordmessage');
    expect(messageSpan.textContent).toContain('MOCK_PASSWORD');
  });
});
