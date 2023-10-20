import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [LogInComponent, RegisterComponent, LogOutComponent],
  imports: [CommonModule, SharedModule, RouterLink],
  exports: [LogInComponent, RegisterComponent],
})
export class AuthMdModule {}
