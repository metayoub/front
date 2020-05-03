import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'ngx-administration-list',
    templateUrl: './list.component.html',
    styleUrls: ['list.component.scss'],
})

export class AdministrationListComponent implements OnInit{
    users : any;
    source: LocalDataSource = new LocalDataSource();
    settings = {
        actions: false,
        hideSubHeader: true,
        columns: {
          username: {
            title: 'username',
            type: 'string',
          },
          nom: {
            title: 'nom',
            type: 'string',
          },
          prenom: {
            title: 'prenom',
            type: 'string',
          },
          sexe: {
            title: 'gender',
            type: 'string',
          },
          email: {
            title: 'email',
            type: 'string',
          },
          store: {
            title: 'store',
            type: 'string',
          },
          activate: {
            title: 'isActive',
            type: 'boolean',
          },
        },
      };

    constructor(private route: ActivatedRoute,
      private router: Router,){}

    ngOnInit (){
        this.route.data.subscribe(data => this.users = data.users);
        this.source.load(this.users);
    }

    onUserRowSelect(e) {
      this.router.navigate(['home/administation/edit/', e.username]);
    }
}