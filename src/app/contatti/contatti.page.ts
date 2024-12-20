import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.page.html',
  styleUrls: ['./contatti.page.scss'],
  standalone:false
})
export class ContattiPage implements OnInit {
  contattiForm!: FormGroup;


  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contattiForm = this.formBuilder.group({
      nome: ['', Validators.required],          // Campo 'nome' obbligatorio
      email: ['', [Validators.required, Validators.email]],  // Campo 'email' obbligatorio e con validazione email
      messaggio: ['', Validators.required],     // Campo 'messaggio' obbligatorio
    });
  }
  
  navigateToHome() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    if (this.contattiForm?.valid) {
      console.log('Form Submitted', this.contattiForm.value);
    } else {
      console.log('Form not valid');
    }
  
  }
}
