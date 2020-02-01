import { Component, OnInit } from '@angular/core';
import { AccountsService } from "../../services/accounts.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  constructor(private accounts: AccountsService, private router: Router) { }

  ngOnInit() {
    this.getAllAccounts();
  }

  customerAccounts: any;

  getAllAccounts() { 
    this.customerAccounts = this.accounts.accounts
    console.log(this.customerAccounts);
  }

  // details(e) {
  //   // console.log(e.target.innerText);
  //   let target = e.target.innerText;
  //   if (target == 'account one') {
  //     console.log('1')
  //     localStorage.setItem('account', '1')
  //   }
  //   else if (target == 'account two') {
  //     console.log('2')
  //     localStorage.setItem('account', '2')
  //   }
  //   if (target == 'account three') {
  //     console.log('3')
  //     localStorage.setItem('account', '3')
  //   }
  //   if (target == 'account four') {
  //     console.log('4')
  //     localStorage.setItem('account', '4')
  //   }
  // }

  details(id) {
    this.router.navigate(['accountdetails/', id])
  }

}
