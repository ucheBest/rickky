import { ResetPrompt } from './reset-prompt';
import { DialogService } from "aurelia-dialog";
import { ValidationController } from "aurelia-validation";
import { inject } from 'aurelia-dependency-injection';

@inject(DialogService)
export class Dialog {

  controller: ValidationController;
  dialogService: DialogService;

  constructor (dialogService: DialogService) {
    this.dialogService = dialogService;
  }

  public submit(){
    this.dialogService.open({ viewModel: ResetPrompt, model: 'Good or Bad?', lock: false }).whenClosed(response => {
      if (!response.wasCancelled) {
        console.log('good');
      } else {
        console.log('bad');
      }
      console.log(response.output);
    });
  }
}
