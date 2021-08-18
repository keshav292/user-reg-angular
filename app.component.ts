import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as state_data from './data_state_district.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reg-ng';
  State : any  = []; 
  District : any;
  index_of_state : number = 0;
  state_selected : string = "";
  flag_state : boolean = false;
  formValue !: FormGroup;
  constructor(private formbuilder: FormBuilder){
    for (var i=0; i < 2; i++) {
      this.State[i]=(state_data[i].state);
   }
  }
  ngOnInit(): void {
      this.formValue = this.formbuilder.group({
        name : [''],
        address : [''],
        state : [''], 
        district : ['']
      })
  }
  onSubmit(){
      console.log(state_data);
      console.log("Hi there "+this.formValue.value.name);
  }

  onChange(event: any){
    this.state_selected = event.target.value;
    this.flag_state = true;
    for (var i = 0 ; i < 2; i++ ){
      if(this.state_selected == state_data[i].state){
        this.index_of_state = i;
        break;
      }
    }
    this.District = state_data[this.index_of_state].district;
    console.log(event.target.value);
  }
}
