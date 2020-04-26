import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { AuthService } from '../../@services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-rp',
  templateUrl: './requestPassword.component.html',
  styleUrls: ['requestPassword.component.scss'],
})
export class NgxRPComponent implements OnInit{
  errors: string[];
  user: any;
  submitted: boolean;
  rememberMe: boolean;
  forms: any;
  returnUrl: string;

  constructor (private authService : AuthService, private router: Router,private cd: ChangeDetectorRef, private route: ActivatedRoute){
    if(this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.submitted = false;
    this.rememberMe = false;
    this.user = {};
    this.forms = {
      validation: {
        email: {
          required: true,
        }
      },
      showMessages: {
        success: true,
        error: true,
      },
    };
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  send(): void {
    this.errors = [];
    this.submitted = true;
    this.authService.login(this.user.email, this.user.password)
      .subscribe(
        () => {
          // this.router.navigate([this.returnUrl])
        },
        error => {
          this.submitted = false;
          this.errors.push(error.error.message || error.statusText);
        }
      )
  }
}
