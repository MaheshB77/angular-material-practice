import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  name: string = "";
  email: string = "";
  phoneNumber: string = "";
  favoriteSport: string = "";
  sports: string[] = ["Cricket", "Football"]

  constructor() { }

  ngOnInit(): void {
  }

}
