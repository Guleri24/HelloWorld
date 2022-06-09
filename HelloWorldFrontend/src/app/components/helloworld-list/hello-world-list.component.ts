import {Component, OnInit} from '@angular/core';
import {HelloWorld} from "../../models/helloworld.model";
import {HelloWorldService} from "../../services/hello-world.service";

@Component({
  selector: 'app-hello-world-list',
  templateUrl: './hello-world-list.component.html',
  styleUrls: ['./hello-world-list.component.css']
})
export class HelloWorldListComponent implements OnInit {

  helloWorlds?: HelloWorld[];
  currentHelloWorld: HelloWorld = {};
  currentIndex = -1;
  name = '';

  constructor(private helloWorldService: HelloWorldService) {
  }

  ngOnInit(): void {
    this.retrieveHelloWorlds();
  }

  retrieveHelloWorlds(): void {
    this.helloWorldService.getAll()
      .subscribe({
        next: (data) => {
          this.helloWorlds = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveHelloWorlds();
    this.currentHelloWorld = {};
    this.currentIndex = -1;
  }

  setActiveHelloWorld(helloWorld: HelloWorld, index: number): void {
    this.currentHelloWorld = helloWorld;
    this.currentIndex = index;
  }

  removeAllHelloWorlds(): void {
    this.helloWorldService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentHelloWorld = {};
    this.currentIndex = -1;

    this.helloWorldService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.helloWorlds = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
