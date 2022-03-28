import { Component, OnInit } from '@angular/core';
import {
    FormArray,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    public form: FormGroup = new FormGroup({
        email: new FormControl('',Validators.email),
        password: new FormControl('', Validators.required),
        address: new FormGroup({
            country: new FormControl(''),
            city: new FormControl('',Validators.required)
        }),
        skills: new FormArray([])

    });

  ngOnInit() {
  }

    public Submit() {
        console.log(this.form.value)
    }
    get skills(){
      return this.form.get('skills') as FormArray
    }
    public addSkill(){
      const control = new FormControl('',Validators.required );
      this.skills.push(control)
    }

    public setCapital(){
      const country = {
          ru: 'Москва',
          by: 'Минск',
          ua: 'Киев'
      }
      // @ts-ignore
        const cityKey = this.form.get('address').value.country;
      // @ts-ignore
        const city = country[cityKey];
        console.log(city)
        this.form.patchValue({
            address:{
                city
            }
        })

    }
}
