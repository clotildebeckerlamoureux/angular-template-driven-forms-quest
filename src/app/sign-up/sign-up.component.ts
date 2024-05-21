import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../classes/user.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  onSubmit():void {
    console.log(this.newUser)
  }

  newUser: User = new User('', '', '', '')

  passwordContainsLowerCase():boolean {
    let lowerCase = this.newUser.password.match(/[a-z]/)
    if (lowerCase?.length !== 0) {
      return true
    } else { 
      return false
    }
  }
}
