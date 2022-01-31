import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
