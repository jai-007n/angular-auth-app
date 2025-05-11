import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CommonHelperService {

  constructor(private router: Router) { }

  commonCatchBlock(err: any, frm : any|false = false) {
    if (!err?.response) {
      // return toast.error('Something went wrong', {
      //   duration: 2000,
      //   position: 'top-right',
      // })
    }


    if (err.response.status === 401) {
      this.destroyTokenDetails()
      this.router.navigate(['/']);
    }

    if (err.response.status === 409) {
      // return toast.error('Something went wrong', {
      //   duration: 2000,
      //   position: 'top-right',
      // })
      return
    }

    if (err.response.status === 400) {
      let msg = err?.response?.data?.message || 'Something went wrong'
      return 
      // toast.error(msg, {
      //   duration: 2000,
      //   position: 'top-right',
      // });
    }

    if (err.response.status === 406) {
      return
      //  toast.error(err.response.data.message, {
      //   duration: 2000,
      //   position: 'top-right',
      // });
    }

    if (frm) {
      let errors = err.response.data;
      frm.find('.form-group').removeClass('error');
      frm.find('.help-block').html('');
      let checkFirstEle = 0;
      $.each(errors, function (i:any, _msg:string) {
        let el = frm.find("[name=" + i + "]");
        if (checkFirstEle === 0) {
          el.focus();
          checkFirstEle++;
        }
        el.parents('.form-group').find('.help-block').addClass('text-red-500')
        el.parents('.form-group').find('.help-block').html(_msg);
      });
      return 
      // toast.error(err.response.data.message, {
      //   duration: 2000,
      //   position: 'top-right',
      // })
    } else {
      if (err.response?.data?.message)
        return
        // toast.error(err.response.data.message, {
        //   duration: 2000,
        //   position: 'top-right',
        // })
    }
    if (err.response.status === 500) {
      return 
      // toast.error(err.response.data.message, {
      //   duration: 2000,
      //   position: 'top-right',
      // });
    }
  }

  destroyTokenDetails() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentToken')
  }
}
