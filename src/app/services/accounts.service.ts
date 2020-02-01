import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  accounts: any[] = [
    {
      id: 1,
      accountName: 'account one',
      accountNum: 1234,
      balance: 1000
    },
    {
      id: 2,
      accountName: 'account two',
      accountNum: 2345,
      balance: 2000
    },
    {
      id: 3,
      accountName: 'account three',
      accountNum: 3456,
      balance: 3000
    },
    {
      id: 4,
      accountName: 'account four',
      accountNum: 4567,
      balance: 4000
    },
  ]


}
