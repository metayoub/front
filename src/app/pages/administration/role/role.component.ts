import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'ngx-administration-role',
    templateUrl: './role.component.html',
    styleUrls: ['role.component.scss'],
})

export class AdministrationRoleComponent implements OnInit{
    roles : any;
    source: LocalDataSource = new LocalDataSource();
    settings = {
        add: {
            addButtonContent: '<i class="fa fa-plus"></i>',
            createButtonContent: '<i class="fa fa-check"></i>',
            cancelButtonContent: '<i class="fa fa-times"></i>',
            confirmCreate: true,
        },
        edit: {
            editButtonContent: '<i class="fas fa-edit"></i>',
            saveButtonContent: '<i class="fa fa-check"></i>',
            cancelButtonContent: '<i class="fa fa-times"></i>',
            confirmSave: true,
        },
        delete: {
            deleteButtonContent: '<i class="fas fa-trash"></i>',
            confirmDelete: true,
        },
        columns: {
          name: {
            title: 'name',
            type: 'string',
            width: '80%',
          }
        },
      };

    constructor(private route: ActivatedRoute,
      private router: Router,){}

    ngOnInit (){
        this.route.data.subscribe(data => this.roles = data.roles);
        this.source.load(this.roles);
    }

    onDeleteConfirm(e) {
        console.log("delete");
        console.log(e);
    }

    onSaveConfirm(e) {
        console.log("save");
        console.log(e);
    }

    onCreateConfirm(e) {
        console.log("save");
        console.log(e);
    }
}