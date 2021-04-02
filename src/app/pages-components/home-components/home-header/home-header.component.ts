import { Component, OnInit } from '@angular/core';

/*-----Data----*/
import {data} from '../../../../Virt-Db/Data';

/*---Interface----*/
interface IData{
  type: string;
  _id: number;
  amount: number;
  name: {
    first: string,
    last: string
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  dataTransactions: IData[] = data;
  total_count_transactions: number;

  constructor() { }

  ngOnInit(): void {
    this.total_count_transactions = this.dataTransactions.length;
  }

}
