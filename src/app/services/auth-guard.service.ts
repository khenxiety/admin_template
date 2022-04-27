import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthServiceService, public router: Router,private toast:ToastrService) { }



  showError(){
    this.toast.error('You need to login first before accesing this page', 'Error');
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      console.log("not login")
      this.showError()

      return false;
    }
    return true;
  }
}
