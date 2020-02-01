import { Component, OnInit } from '@angular/core';
import { AccountsService } from "../../services/accounts.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.page.html',
  styleUrls: ['./accountdetails.page.scss'],
})
export class AccountdetailsPage implements OnInit {

  accDetails;

  constructor(private account: AccountsService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      console.log(params)
      this.getAccountDetails(params.id-1)
    })
  }


  getAccountDetails(id) {
    this.accDetails = this.account.accounts[id]
    console.log(this.accDetails);
  }

}
