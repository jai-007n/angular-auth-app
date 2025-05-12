import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProductService } from '../../service/service-product.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit {
  formData: ServiceResponse = { name: '', description: '' };
  errors: any = {};
  private isEditSubject = new BehaviorSubject<boolean>(false);
  public isEdit$ = this.isEditSubject.asObservable();
  constructor(private serviceProduct: ServiceProductService, private router: Router, private route: ActivatedRoute) { }
  editForm: boolean = this.isEditSubject.value;
  paramValue: any = '';


  ngOnInit(): void {
    this.paramValue = this.route.snapshot.paramMap.get('id');
    if (this.paramValue) {
      this.serviceProduct.getService(this.paramValue).subscribe({
        next: (response) => {
          // Handle successful login
          this.formData = response.service
          this.isEditSubject.next(true);
          this.editForm = this.isEditSubject.value;
        },
        error: (err) => {
          // Handle login error
          console.log(err, 111)
        }
      }
      );
    }
    console.log(this.editForm)
  }



  createData(data: any) {
    this.serviceProduct.createService(data).subscribe({
      next: () => {
        // Handle successful login
        this.router.navigate(['/service/list']);
      },
      error: (err) => {
        // Handle login error
        console.log(err)
        this.errors = err.error
        console.log(this.errors?.name)
      }
    }
    );
  }

  updateData(data: any,serviceId:any) {
    this.serviceProduct.updateService(data, serviceId).subscribe({
      next: () => {
        // Handle successful login
        this.router.navigate(['/service/list']);
      },
      error: (err) => {
        // Handle login error
        console.log(err)
        this.errors = err.error
        console.log(this.errors?.name)
      }
    }
    );
  }

  onSubmit() {
    // Handle form submission logic here
    let data = this.formData;
    if (this.paramValue) {
      console.log('Update Form submitted', this.formData);
      this.updateData(data,this.paramValue)
    } else {
      console.log('Form submitted', this.formData);
      this.createData(data)
    }


  }

}

interface ServiceResponse {
  name: string,
  description: string
}
