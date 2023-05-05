import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordControlsComponent } from './password-controls.component';

@Component({
  selector: 'fakecomp',
  template: `
    <password-controls
      [password]="password"
      (generate)="onGenerate()"
    ></password-controls>
  `,
})
class FakeParentComponent {
  password?: string;
  mytestProperty: Boolean = false;
  onGenerate() {
    this.mytestProperty = true;
  }
}

describe('PasswordControlsComponent | in ParentComponent', () => {
  let fixture: ComponentFixture<FakeParentComponent>;
  let component: FakeParentComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordControlsComponent, FakeParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FakeParentComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
  });

  it('should emit event when user click the button', () => {
    const spy = spyOn(component, 'onGenerate');
    fixture.nativeElement.querySelector('button').click();
    expect(spy).toHaveBeenCalled();
  });

  it(`should not display btn "copier le mot de passe" 
  if there is no password`, () => {
    const copyBtn = fixture.nativeElement.querySelector('#copybtn');
    expect(copyBtn).toBeFalsy();
  });

  it(`should display btn "copier le mot de passe" 
  if there is password`, () => {
    component.password = 'MOCK_PASSWORD';
    fixture.detectChanges();
    const copyBtn = fixture.nativeElement.querySelector('#copybtn');
    expect(copyBtn).toBeTruthy();
  });
});

describe('PasswordControlsComponent', () => {
  let fixture: ComponentFixture<PasswordControlsComponent>;
  let component: PasswordControlsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordControlsComponent);
    component = fixture.componentInstance;
  });

  it(`should copy the password 
  when user click on btn "copier le mot de passe`, () => {
    //we assume the generate btn has been already clicked and there is a password
    const spy = spyOn(component, 'OnClickCopy');

    component.password = 'MOCK_PASSWORD';
    fixture.detectChanges();
    fixture.nativeElement.querySelector('#copybtn').click();
    expect(spy).toHaveBeenCalled();
  });

  it(`should display a message 'le mot de passe a bien été copié' 
  when user click on btn "copier le mot de passe`, () => {
    const spy = spyOn(component, 'OnClickCopy');
    spy.and.callFake(() => {
      component.ToggleMessageCopy();
    });
    component.password = 'MOCK_PASSWORD';
    fixture.detectChanges();
    fixture.nativeElement.querySelector('#copybtn').click();
    expect(component.passwordToClipboard).toEqual(true);
  });

  it(`should hide the message 'le mot de passe a bien été copié
  when user click on "generer"`, () => {
    fixture.nativeElement.querySelector('#generatebtn').click();
    const displayMessageEl = fixture.nativeElement.querySelector(
      '#displayCopyMessage'
    );
    expect(displayMessageEl).toBeFalsy;
  });
});
