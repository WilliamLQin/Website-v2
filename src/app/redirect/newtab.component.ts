import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'redirect',
    template: 'redirecting...'
})
export class NewtabComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.data
            .subscribe(data => {
                var url: string = Object.keys(data).map(key => data[key])[0];
                this.router.navigate(["/"]);
                window.open(url, '_blank');
            });
    }
}