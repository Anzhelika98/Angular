import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  // public name = new FormControl('');
  //
  // public updateName() {
  //   this.name.setValue('Ann');
  // }
  constructor(private fb: FormBuilder) {
  }

  // Form Group
  public profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['']
  });


  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
