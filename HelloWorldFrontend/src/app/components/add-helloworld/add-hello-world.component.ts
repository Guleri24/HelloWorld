import {Component, OnInit} from '@angular/core';
import {HelloWorld} from "../../models/helloworld.model";
import {HelloWorldService} from "../../services/hello-world.service";

@Component({
  selector: 'app-add-hello-world',
  templateUrl: './add-hello-world.component.html',
  styleUrls: ['./add-hello-world.component.css']
})
export class AddHelloWorldComponent implements OnInit {

  helloWorld: HelloWorld = {
    name: ''
  };
  submitted = false;

  constructor(private helloWorldService: HelloWorldService) {
  }

  ngOnInit(): void {
  }

  saveHelloWorld(): void {
    const data = {
      name: this.helloWorld.name
    };

    this.helloWorldService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newHelloWorld(): void {
    this.submitted = false;
    this.helloWorld = {
      name: ''
    };
  }

}
