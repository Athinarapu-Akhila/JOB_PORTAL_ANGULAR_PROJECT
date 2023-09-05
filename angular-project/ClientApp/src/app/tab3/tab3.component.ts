import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgModel } from "@angular/forms";
interface Job {
  id: number;
  title: string;
  company:string;
  location: string;
  skills: string[];
  experienceLevel: string;
}
interface FilterOptions {
  skills: string;
  location: string;
  experienceLevel: string;
}
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
})
export class Tab3Component{
  jobs: Job[] = [
    {
      id: 1,
      title: 'Frontend Developer',
      company:'infor',
      location: 'Hyderabad',
      skills: ['HTML', 'CSS', 'JavaScript'],
      experienceLevel: 'entry'
    },
    {
      id: 2,
      title: 'Backend Developer',
      company:'Micron',
      location: 'Sky view',
      skills: ['Node.js', 'MongoDB', 'Express'],
      experienceLevel: 'entry'
    },
    {
      id: 3,
      title: 'pega Developer',
      company:'Pega Systems',
      location: 'Skyview',
      skills: ['pega'],
      experienceLevel: 'entry'
    },
    {
      id: 4,
      title: 'full stack Developer',
      company:'Micron',
      location: 'Aquila',
      skills: ['HTML', 'CSS', 'JavaScript','Node.js', 'MongoDB', 'Express'],
      experienceLevel: 'intermediate'
    },
    {
      id: 5,
      title: 'Backend Developer',
      company:'S&P Global',
      location: 'Orion',
      skills: ['Node.js', 'MongoDB', 'Express'],
      experienceLevel: 'intermediate'
    },
    {
      id: 6,
      title: 'SQL Developer',
      company:'DXC Technology',
      location: 'San Francisco',
      skills: ['Node.js', 'MongoDB', 'sql'],
      experienceLevel: 'intermediate'
    },
    {
      id: 7,
      title: 'frontEnd Developer',
      company:'DBS',
      location: 'Sky View',
      skills: ['HTML', 'CSS', 'JavaScript'],
      experienceLevel: 'senior'
    },
    {
      id: 8,
      title: 'Backend Developer',
      company:'S&P Global',
      location: 'Orion',
      skills: ['Node.js', 'MongoDB', 'Express'],
      experienceLevel: 'senior'
    },
    {
      id: 9,
      title: 'Full stack Developer',
      company:'S&P Global',
      location: 'San Francisco',
      skills: ['HTML', 'CSS', 'JavaScript','Node.js', 'MongoDB', 'Express'],
      experienceLevel: 'senior'
    },
    
  ];
  
  filteredJobs: Job[] = [];
  filterOptions: FilterOptions = { skills: '', location: '', experienceLevel: '' };

  constructor() {
    this.filteredJobs = this.jobs; 
  }

  applyFilters() {
    this.filteredJobs = this.jobs.filter(job => {
      const skillsMatch = !this.filterOptions.skills || job.skills.includes(this.filterOptions.skills);
      const locationMatch = !this.filterOptions.location || job.location.toLowerCase().includes(this.filterOptions.location.toLowerCase());
      const experienceMatch = !this.filterOptions.experienceLevel || job.experienceLevel === this.filterOptions.experienceLevel;

      return skillsMatch && locationMatch && experienceMatch;
    });
  }
}