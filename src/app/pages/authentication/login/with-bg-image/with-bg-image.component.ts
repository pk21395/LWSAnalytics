import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';


@Component({
  selector: 'app-with-bg-image',
  templateUrl: './with-bg-image.component.html',
  styleUrls: ['./with-bg-image.component.css']
})
export class WithBgImageComponent implements OnInit {
  constructor(private router: Router, private userService: AuthenticationService) { }

  ngOnInit() {
    
  }
  /**
   * @param uemail 'registered email'
   * @param upassword 'user password'
   * @param user 'list of registered user.'
   */
  search(uemail,upassword, user){
    for (var i=0; i < user.length; i++) {
        if (user[i].email === uemail && user[i].password === upassword) {
          localStorage.setItem("loginDetail",'[{"email":"'+uemail+'"},{"isActive":"1"}]');
          /*Start after successfull login you will redirect to dashboard*/
            this.router.navigate(['/dashboard']);
          
            return "Authentication successfull";
        }
        else{
          /**
           * email or password is incorrect
           */
          return "Authentication Failed";
        }
    }

}
  onSubmit(loginForm: NgForm){
    // let user = this.userService.getLocalStorageData();
    // let result = this.search(loginForm.value.email,loginForm.value.password, user);
    let currentUser = undefined;
    let form = loginForm.value;
    let users = JSON.parse(localStorage.users);
    currentUser = users.find(u => u.email == form.email && u.password == form.password);
    if(currentUser){
      localStorage.setItem("user", JSON.stringify(currentUser));
      this.router.navigate(["/dashboard"]);
    }else{
      alert("Invalid credentials");
    }

  }
}
