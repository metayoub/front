import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shared-selector',
    templateUrl: './table.component.html',
    styleUrls: ['table.component.scss'],
  })

export class TableComponent implements OnInit {
    ngOnInit() {
        console.log('test');
    }
}