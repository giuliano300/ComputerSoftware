import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.page.html',
  styleUrls: ['./contatti.page.scss'],
  standalone:false
})
export class ContattiPage implements OnInit {
  contattiForm!: FormGroup;
  responseMessage: string = ''; 


  constructor(private router: Router, private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.contattiForm = this.formBuilder.group({
      nome: ['', Validators.required],        
      email: ['', [Validators.required, Validators.email]], 
      messaggio: ['', Validators.required],
      accetto: [false, Validators.requiredTrue]    
    });
  }
  
  navigateToHome() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    if (this.contattiForm?.valid) {
      const formData = this.contattiForm.value;

      this.apiService.sendFormData(formData).subscribe(
        (response) => {
           // Svuota i campi del modulo
           this.contattiForm.reset();
          
           // Memorizza la risposta nel div
           this.responseMessage = 'Messaggio inviato con successo!';
        },
        (error) => {
          console.error('Errore nell\'invio del form:', error);
          alert('Si è verificato un errore. Riprova.');
        }
      );
    } else {
      console.log('Form not valid');
    }
  
  }
}
