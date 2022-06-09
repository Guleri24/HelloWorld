import {Component, Input, OnInit} from '@angular/core';
import {HelloWorldService} from "../../services/hello-world.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HelloWorld} from "../../models/helloworld.model";
import {combineLatestAll} from "rxjs";

@Component({
  selector: 'app-hello-world-details',
  templateUrl: './hello-world-details.component.html',
  styleUrls: ['./hello-world-details.component.css']
})
export class HelloWorldDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentHelloWorld: HelloWorld = {
    name: ''
  };

  message = '';

  constructor(
    private helloWorldService: HelloWorldService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getHelloWorld(this.route.snapshot.params["id"]);
    }
  }

  getHelloWorld(id: string): void {
    this.helloWorldService.get(id)
      .subscribe({
        next: (data) => {
          this.currentHelloWorld = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateHelloWorld(): void {
    this.message = '';

    this.helloWorldService.update(this.currentHelloWorld.id, this.currentHelloWorld)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Your name was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteHelloWorld(): void {
    this.helloWorldService.delete(this.currentHelloWorld.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/helloworlds']);
        },
        error: (e) => console.error(e)
      });
  }
}
