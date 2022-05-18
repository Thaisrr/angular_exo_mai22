import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Game} from "../../utils/models/Game";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  @Output() emitValue = new EventEmitter<Game>();

  gameGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    author: new FormControl('', [Validators.required, Validators.minLength(2)]),
    image: new FormControl('', [Validators.minLength(5)]),
    status: new FormControl(false)
  });

  hasError(name: string) {
    const control = this.gameGroup.controls[name];
    return (control.invalid && control.touched ) ? 'Ce champs est invalide' : null;
  }

  handleSubmit() {
    if(this.gameGroup.valid) {
      console.log(this.gameGroup.value);
      this.emitValue.emit(this.gameGroup.value);
    }
  }

}
