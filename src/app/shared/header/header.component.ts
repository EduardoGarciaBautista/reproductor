import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    menuIsOpen = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    changeMenuState(): void {
        if (this.menuIsOpen) {
            this.menuIsOpen = false;
        }
    }

}
