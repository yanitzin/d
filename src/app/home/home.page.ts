import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paysheets: any = [{
    rfc: 'GOPA010331FGHI',
    password: 'GOPA',
    name: {
      firstName: 'Alexander',
      lastName: 'Gongora',
      fullName: 'Alexander Gongora pereida'
    },
    salary: 3500,
    type: 'Base',
    active: true,
    email: 'gopa@gmail.com',
    initialDate: '2001/03/31'
  },
  {
    rfc: 'CAPV790128JNKL',
    password: 'CAPV',
    name: {
      firstName: 'vanessa',
      lastName: 'camcho',
      fullName: 'vanessa camacho pereida'
    },
    salary: 13000,
    type: 'Base',
    active: true,
    email: 'CAPV@gmail.com',
    initialDate: '1979/01/28'
  },
  {
    rfc: 'SOPY970630NBTRN',
    password: 'SOPY',
    name: {
      firstName: 'Yanitzin',
      lastName: 'Soberano',
      fullName: 'Yaniztin Soberano Pereida'
    },
    salary: 20000,
    type: 'Confianza',
    active: false,
    email: 'SOPY@gmail.com',
    initialDate: '1997/06/30'
  },
  {
    rfc: 'RACGXZDFN',
    password: 'RACG',
    name: {
      firstName: 'Gema',
      lastName: 'Ramos',
      fullName: 'Gema Ramos Camacho'
    },
    salary: 13000,
    type: 'Contrato',
    active: false,
    email: 'RACG@gmail.com',
    initialDate: '1993/04/27'
  }
];

  constructor(private router: Router) {}

  view(paysheet: any): void
  {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(paysheet)
      }
    };

    this.router.navigate(['/view-person'], extras);
  }

  edit()
  {
    this.router.navigate(['/edit-person']);
  }
}
