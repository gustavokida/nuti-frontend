import { Component } from '@angular/core';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.scss']
})
export class UrlFormComponent {
  textValue: string = '';

  onSubmit() {
    // Perform any logic you want with the submitted text
    console.log('Submitted text:', this.textValue);
    // You can send the text to a service or API using HTTP requests here
  }
}
