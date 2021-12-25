import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  registrationForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
