import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


/*---Data-----*/
import {data} from '../../../../Virt-Db/Data';


/*-----Interface----*/
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
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})




export class TableDataComponent implements OnInit  {
  tabIndex: number;
  navLinks: string[] = [];
  valuesTab: IData[];
  dataF: IData[] = data;


  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    this.getQueryParams();
  }

  ngOnInit(): void {
    const arr = this.dataF.map(item => item.type);
    this.navLinks = arr.filter(this.uniqueTypes);
    this.filterTab();
  }

  uniqueTypes(value, index, self): boolean{
    return self.indexOf(value) === index;
  }

  getQueryParams(): void{
    this.router.events.subscribe((val) => {
      if ( val instanceof NavigationEnd ){
        const {tab} = this.activateRoute.snapshot.queryParams;
        this.tabIndex = tab ? tab : 0;
        this.filterTab();
      }
    });
  }

  filterTab(): void{
    const filterType = this.navLinks[ this.tabIndex ];
    this.valuesTab = this.dataF.filter(item => item.type === filterType);
  }





}
