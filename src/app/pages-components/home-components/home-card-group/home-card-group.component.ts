import { Component, OnInit } from '@angular/core';

/*----Data----*/
import {data} from '../../../../Virt-Db/Data';

/*----Interface----*/
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
  selector: 'app-home-card-group',
  templateUrl: './home-card-group.component.html',
  styleUrls: ['./home-card-group.component.css']
})
export class HomeCardGroupComponent implements OnInit {

  dataTransactions: IData[] = data;
  arrTypes: string[] = [];
  filterTransactions: IData[][] = [];

  constructor() { }

  ngOnInit(): void {
    const arr = this.dataTransactions.map(item => item.type);
    this.arrTypes = arr.filter(this.uniqueTypes);
    for ( let i = 0; i < this.arrTypes.length; i++ ){
      this.filterTransactions.push( this.dataTransactions.filter(item => item.type === this.arrTypes[i]) );
    }
  }

  uniqueTypes(value, index, self): boolean{
    return self.indexOf(value) === index;
  }

}
