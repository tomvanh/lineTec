import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactTitle: String = 'Heeft u nog vragen?';
  submitted: Boolean = false;
  contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    message: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder, private service: MessageService) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.service.send(this.contactForm.value)
      .subscribe(
        data => {
          if (data['success']) {
            this.contactForm.reset();
            this.submitted = false;
            alert('Wij reageren zo spoedig mogelijk.');
          } else {
            alert('Er is iets fout gelopen, probeer ons later nog eens te bereiken.');
          }
        }
      );
  }
}
