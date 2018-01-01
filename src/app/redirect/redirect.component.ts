import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'redirect',
    template: 'redirecting...'
})
export class RedirectComponent implements OnInit {

    sub: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.data
            .subscribe(data => window.location.href = Object.keys(data).map(key => data[key])[0]);
    }
}