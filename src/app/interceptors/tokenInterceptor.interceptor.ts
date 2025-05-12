import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const logData = localStorage?.getItem('token');
  if (logData != null) {
    console.log(logData)
    const token = logData
    const newReqData = req.clone({
      setHeaders: {
        'Authorization': token
      }
    })
   return next(newReqData)
  }

  return next(req);
};
