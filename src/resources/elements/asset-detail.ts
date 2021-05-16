import { bindable } from 'aurelia-framework';
import { ValidationRules,
  ValidationMessages,
  ValidationController,
  ValidationControllerFactory
} from 'aurelia-validation';

export class AssetDetail {
  @bindable
  public asset;
  private departments = [
    "HQ",
    "Store 1",
    "Store 2",
    "Store 3",
    "Maintenance Station"
  ]

  public bind() {
    ValidationRules
      .ensure("assetName")
        .required()
        .minLength(5)
      .ensure("department")
        .required()
        .satisfies(value => {
        return this.departments.indexOf(value) > -1
        })
        .withMessage("Please select a valid department!")
      .ensure("emailOfDepartment")
        .required().email()
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      .on(this.asset);
  }
}
