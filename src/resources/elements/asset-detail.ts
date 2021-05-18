import { DialogService } from 'aurelia-dialog';
import { bindable, autoinject } from 'aurelia-framework';
import { ValidationRules,
  ValidationMessages,
  ValidationController,
  ValidationControllerFactory
} from 'aurelia-validation';
import { BootstrapFormRenderer } from 'bootstrap-form-renderer';

@autoinject
export class AssetDetail {
  @bindable
  public asset;
  units = [
    "HQ",
    "Store 1",
    "Store 2",
    "Store 3",
    "Maintenance Station"
  ];

  controller: ValidationController;
  dialogService: DialogService;

  constructor (controllerFactory: ValidationControllerFactory, dialogService: DialogService, element: Element) {
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new BootstrapFormRenderer());
    this.dialogService = dialogService;
    //this.element = element;
  }

  public async inputChanged(value) {
    let resetButton = document.getElementById('reset');
    let sendButton = document.getElementById('send');
    if (value !== '') {
      resetButton.removeAttribute('disabled');
    } else {
      resetButton.setAttribute('disabled', 'true');
    }
    
    let result = await this.controller.validate();

    if (result.valid ) {
      sendButton.removeAttribute('disabled');
    } else {
      sendButton.setAttribute('disabled', 'true')
    }
  }

  public bind() {
    ValidationRules
      .ensure("assetName")
        .required()
        .minLength(5)
      .ensure("department")
        .required()
        .satisfies(value => {
        return this.units.indexOf(value) > -1
        })
        .withMessage("Please select a valid department!")
      .ensure("emailOfDepartment")
        .required().email()
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      .ensure("purchaseDate")
        .required()
        .satisfies(dateString => {
          let oneYearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
          let hour = oneYearAgo.getHours();
          let hourForUse = ("0" + hour).slice(-2);
          let minute = oneYearAgo.getMinutes();
          let minuteForUse = ("0" + minute).slice(-2);
          let second = oneYearAgo.getSeconds();
          let secondForUse = ("0" + second).slice(-2);
          let selectedDate = new Date(`${dateString}T${hourForUse}:${minuteForUse}:${secondForUse}`);
          return selectedDate > oneYearAgo;
        })
      .on(this.asset);
  }
}
