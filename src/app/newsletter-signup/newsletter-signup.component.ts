import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
})
export class NewsletterSignupComponent implements OnInit {
  signupForm!: FormGroup;
  feedbackMessage: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      howHeard: ['', Validators.required],
      reason: [''],
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.feedbackMessage = 'Please fill in all required fields with valid data.';
      return;
    }

    // Call an API endpoint to handle form submission and persistence.
    // You can use Angular's HttpClient to make an HTTP POST request to the server.

    this.feedbackMessage = 'You have been signed up to the newsletter!';
  }
}
