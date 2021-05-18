import {DialogController} from 'aurelia-dialog';

export class ResetPrompt {
  static inject = [DialogController];
  controller: any;
  constructor(controller){
    this.controller = controller;
  }
}
  

  