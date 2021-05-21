import {computedFrom} from 'aurelia-framework';

export class Welcome {
  public heading = 'Task for Hahn Application as Junior Dev!';
  public firstName = '';
  public lastName = '';
  private previousValue: string = this.fullName;

  // Getters can't be directly observed, so they must be dirty checked.
  // However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  @computedFrom('firstName', 'lastName')
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  public canDeactivate(): boolean | undefined {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }

  get disableSubmitButton() {
    return this.isStringEmpty(this.firstName) || this.isStringEmpty(this.lastName)
  }

  private isStringEmpty (val:string){
    if (val === undefined || val.length === 0){
      return true
    }
    return false
  }
}

export class UpperValueConverter {
  public toView(value: string): string {
    return value.toUpperCase();
  }
}
