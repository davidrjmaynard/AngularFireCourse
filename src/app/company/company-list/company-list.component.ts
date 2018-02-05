import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Company } from 'app/company';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]>;
  

  constructor(private companyService:CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    this.companies$ = this.companyService.getCompanies();
  }

}
