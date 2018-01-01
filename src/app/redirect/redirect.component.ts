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
            .subscribe(data => {
                var url: string = Object.keys(data).map(key => data[key])[0];
                window.history.back();
                window.history.replaceState(null, null, "#");
                window.location.href = url;
            });
    }
}