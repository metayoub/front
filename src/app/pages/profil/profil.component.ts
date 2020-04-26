import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ngx-profil',
    styleUrls: ['./profil.component.scss'],
    templateUrl: './profil.component.html',
})
export class ProfilComponent implements OnInit{
    forms: any;
    submitted: boolean;
    errors: string[];
    user : any;

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
                username: {
                    required: true,
                    disable: true,
                },
                nom: {
                    required: true,
                    disable: false,
                },
                prenom: {
                    required: true,
                    disable: false,
                },
                email: {
                    required: true,
                    disable: true,
                },
                store: {
                    required: false,
                    disable: false,
                },
                adresse: {
                    required: false,
                    disable: false,
                },
            },
        };
        
    }

    submit() {
        console.log(this.user);
    }
}