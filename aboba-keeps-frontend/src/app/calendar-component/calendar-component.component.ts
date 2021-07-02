import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'calendar-component',
    templateUrl: './calendar-component.component.html',
    styleUrls: ["./calendar-component.component.css"]
})
export class CalendarComponentComponent {
    public DayCount: number;
    name: string;
    constructor() {
        this.name = 'Sam';
        this.DayCount = 30;
    }
    
}
