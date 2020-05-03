import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ngx-userEdit',
    styleUrls: ['./edit.component.scss'],
    templateUrl: './edit.component.html',
})
export class EditUserComponent implements OnInit{
    forms: any;
    submitted: boolean;
    errors: string[];
    user : any = {};
    constructor(private route: ActivatedRoute){}

    ngOnInit (){
        this.route.data.subscribe(data => this.user = data.user);
        this.submitted = false;
        this.forms = {
            showMessages: {
                success: true,
                error: true,
            },
            validation: {
                lastName: {
                    required: true,
                    disable: false,
                },
                firstName:{
                    required: true,
                    disable: false,
                },
                username: {
                    required: true,
                    disable: false,
                },
                phoneNumber:{
                    required: true,
                    disable: false,
                },
                adress: {
                    required: true,
                    disable: false,
                },
                store: {
                    required: false,
                    disable: false,
                },
                gender: {
                    required: true,
                    disable: false,
                },
                email: {
                    required: true,
                    disable: false,
                },
            },
        };
        
    }

    submit() {
        console.log(this.user);
    }
}