import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
    public form = this.formBuilder.group({
        name:[''],
        age:[''],
        gender:[''],
    })
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

    public onSubmit() {
        console.log(this.form.value);
    }
}
