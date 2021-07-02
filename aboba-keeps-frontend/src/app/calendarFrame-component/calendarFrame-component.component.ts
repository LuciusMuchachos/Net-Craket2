import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'calendarFrame-component',
    templateUrl: './calendarFrame-component.component.html',
    styleUrls: ["./calendarFrame-component.component.css"]
})
export class CalendarFrameComponent {
    name: string;
    constructor() {
        this.name = 'Sam';
    }
    
}
