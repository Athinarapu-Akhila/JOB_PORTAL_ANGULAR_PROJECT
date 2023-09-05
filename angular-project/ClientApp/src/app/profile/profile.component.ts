import { Component } from "@angular/core";
import { NgModel } from "@angular/forms";

interface EducationDetail {
    schoolName: string;
    startYear: string;
    endYear: string;
    grade:string;
  }
  interface projectsdetail{
    projectname:string;
    description:string;
    skills:string;
  }
  
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html', 
    
})
export class ProfileComponent{
    userdata = {
        name: '',
        age: '',
        email: '',
        address: '',
        educationDetails: [ ] as EducationDetail[],
        projects: [ ] as projectsdetail[],
        hobbies: '',
        };
      
      addEducation() {
       this.userdata.educationDetails.push({ schoolName: '', startYear: '', endYear: '',grade:'' });
      }
    
      removeEducation(index: number) {
        this.userdata.educationDetails.splice(index, 1);
      }
      addproject() {
        this.userdata.projects.push({ projectname: '',description:' ',skills:'' });
       }
     
       removeproject(index: number) {
         this.userdata.projects.splice(index, 1);
       }
    
      submitForm() {
        console.log(this.userdata);
        
      }

}