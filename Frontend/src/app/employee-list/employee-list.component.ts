import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
delteEmployee(arg0: number) {
throw new Error('Method not implemented.');
}
  employees: Employee[];
  constructor(private employeeService: EmployeeService,
    private router: Router) {
    this.employees = [];
  }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmoloyeeList().subscribe(data => {
      this.employees = data;
    });
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details',id]);
  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees(); 
    }, error => {
      console.error('Error deleting employee', error);
    });
  }

}