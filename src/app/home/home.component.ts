import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
// ...................................................................
  myForm : FormGroup;                        
  constructor(private fb: FormBuilder) {}

  ngOnInit(){

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log('Submitted:', this.myForm.value);
  }

// ...........................................................................

model = { name: '', email: '' };
  
onSubmit2() {
  // Process form submission
  console.log('Submitted:', this.model);
}

}
