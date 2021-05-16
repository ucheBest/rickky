import { autoinject, bindable } from 'aurelia-framework';
import {ValidationController, ValidationControllerFactory, ValidationMessages} from 'aurelia-validation';


@autoinject
export class Task {
  public heading = 'Task for Hahn Software';

  @bindable
  public asset= {
    assetName: "",
    department: "",
    emailOfDepartment: ""
  }

  controller: ValidationController;

  constructor (controllerFactory: ValidationControllerFactory) {
    this.controller = controllerFactory.createForCurrentScope();
  }

  

  public async submit() {
    let validationResult = await this.controller.validate();
    if (validationResult.results.length <= 0) {
      alert("Validation successful!");
    }
  }

  public bind() {
    console.log(this.controller.errors)
  }
}
