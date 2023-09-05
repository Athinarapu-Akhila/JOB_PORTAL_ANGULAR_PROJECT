import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { Tab1Component } from '../tab1/tab1.component';
import { FormGroup, FormControl } from '@angular/forms';

interface TableData {
  name: string;
  age?: number;
  gender:string;
  state:string;
  skills:string;
}
interface FormData {
  name: string;
  age?: number;
  gender:string;
  state:string;
  skills:string;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})

export class DetailsComponent{
    name = new FormControl('');
    gender=new FormControl('');
    age= new FormControl('');
    state= new FormControl('');
    skills=new FormControl('');
    //skills:string('');
    
    formData: FormData ={
      name: '',
      gender:' ',
      state:' ',
      skills:'',
    };
  
    
    tableData: TableData[] = [];
    //skill: String[] = ['Telangana', 'Mumbai', 'tDelhi'];
    languages:string[]=['angular','dot net','docker','kubernetes'];

  
    print()
    {
      this.tableData.push({ ...this.formData });
      this.formData = {
        name: '',
        gender:' ',
        state:' ', 
        skills:'',
      };
      console.log(this.name.value);
      console.log(this.gender.value);
      console.log(this.age.value);
      console.log(this.state.value);
      
    }

}