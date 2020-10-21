import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
  }
}
