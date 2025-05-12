import { Component, OnInit } from '@angular/core';
import { ServiceProductService } from '../../service/service-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicelist',
  standalone: false,
  templateUrl: './servicelist.component.html',
  styleUrl: './servicelist.component.css'
})
export class ServicelistComponent implements OnInit {
  serviceList: any = {}
  constructor(private serviceProduct: ServiceProductService, private router: Router) { }

  ngOnInit(): void {
    this.fetchAllData()
  }

  fetchAllData() {
    this.serviceProduct.allService().subscribe({
      next: (response) => {
        this.serviceList = response.list
      },
      error: (err) => {
        console.log(err, 111)
      }
    }
    );
  }

  deleteService(serviceId: any) {
    this.serviceProduct.deleteService(serviceId).subscribe({
      next: (response) => {
        this.fetchAllData()
      },
      error: (err) => {
        // Handle login error
        console.log(err, 111)
      }
    }
    );
  }
}
