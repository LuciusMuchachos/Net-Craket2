import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'leftMenu-component',
    templateUrl: './leftMenu-component.component.html',
    styleUrls: ["./leftMenu-component.component.css"]
})
export class LeftMenuComponent {
    
    name: string;
    constructor() {
        this.name = 'Sam';
    }
    
}
