import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInService } from 'src/app/shared/services/logged-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  constructor(
    private route: Router,
    private loggedInService: LoggedInService
  ) {}

  handleSubmit(form: any) {
    console.log(form);
    this.route.navigate(['../../']);
    this.loggedInService.setLoggedIn(true);
  }
}
