import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldListComponent } from "./components/helloworld-list/hello-world-list.component";
import { HelloWorldDetailsComponent } from "./components/helloworld-details/hello-world-details.component";
import { AddHelloWorldComponent } from "./components/add-helloworld/add-hello-world.component";

const routes: Routes = [
  { path: '', redirectTo: 'helloworlds', pathMatch: "full" },
  { path: 'helloworlds', component: HelloWorldListComponent },
  { path: 'helloworlds/:id', component: HelloWorldDetailsComponent },
  { path: 'add', component: AddHelloWorldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
