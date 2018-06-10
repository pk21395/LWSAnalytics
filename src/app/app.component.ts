import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  template: "<router-outlet><app-spinner></app-spinner></router-outlet>",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  user: any = undefined;
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("users")) {
      // let localStorageData = JSON.parse(localStorage.getItem("users"));
      // if (localStorageData[0].isActive !== "0") {
      //   this.router.navigate(["/dashboard"]);
      // } else {
      //   this.router.navigate(["/login"]);
      // }
    } else {
      let users = [{
        name:"Prashant",
        password:"Admin123",
        email:"prashant@gmail.com"
      },{
        name:"Amit",
        password:"Admin123",
        email:"amit@asd.com"
      },{
        name:"Ashish",
        password:"Admin123",
        email:"ashish@asd.com"
      }];
      localStorage.setItem("users", JSON.stringify(users));
    }

    if(localStorage.user){
      this.user = JSON.parse(localStorage.getItem("user"));
      this.router.navigate(["/dashboard"]);
    }else{
      this.router.navigate(["/login"]);
    }

  }
}
