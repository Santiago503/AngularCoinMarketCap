import { ChangeDetectorRef, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrIconClasses, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  constructor(private router: Router, private toart: ToastrService) {}

  public toartInfo(title: string, body: string) {
    return this.toart.info(body, title);
  }

  public toartError(title: string, body: string) {
    return this.toart.error(body, title);
  }

  public toartSuccess(title: string, body: string) {
    return this.toart.success(body, title);
  }

  public toartWarning(title: string, body: string) {
    return this.toart.warning(body, title);
  }


}
