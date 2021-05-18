import { DialogService } from 'aurelia-dialog';
import { autoinject, bindable } from 'aurelia-framework';
import {ValidationController, ValidationControllerFactory, ValidationMessages} from 'aurelia-validation';
import {BootstrapFormRenderer} from './bootstrap-form-renderer';
import {ResetPrompt} from './reset-prompt';


@autoinject
export class Task {
  public heading = 'Task for Hahn Software';

  @bindable
  public asset = {
    assetName: "",
    department: "",
    emailOfDepartment: ""
  }

  controller: ValidationController;
  dialogService: DialogService;
  element: Element;

  constructor (controllerFactory: ValidationControllerFactory, dialogService: DialogService, element: Element) {
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new BootstrapFormRenderer());
    this.dialogService = dialogService;
    this.element = element;
  }

  public async send(target) {
    let validationResult = await this.controller.validate();
    return this.controller.errors.length === 0;
    // return true;
  }

  public reset(target){
    this.dialogService.open({ viewModel: ResetPrompt, model: 'Good or Bad?', lock: false }).whenClosed(response => {
      if (!response.wasCancelled) {
        this.asset.assetName = "";
        this.asset.department = "";
        this.asset.emailOfDepartment = "";
        target.setAttribute('disabled', 'true');
      }
    });
  }

}

