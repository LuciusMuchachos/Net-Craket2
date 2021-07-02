import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TestComponentComponent } from "./test-component/test-component.component";
import { ButtonComponentComponent } from "./button-component/button-component.component";
import { HttpClientModule } from "@angular/common/http";
import { CalendarComponentComponent } from "./calendar-component/calendar-component.component";
import { LeftMenuComponent } from "./leftMenu-component/leftMenu-component.component";
import { CalendarFrameComponent } from "./calendarFrame-component/calendarFrame-component.component";
import { PopUpButtonComponent } from "./popUpButton-component/popUpButton-component.component";
@NgModule({
  declarations: [
      AppComponent,
      TestComponentComponent,
      ButtonComponentComponent,
      CalendarComponentComponent,
      LeftMenuComponent,
      CalendarFrameComponent,
      PopUpButtonComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
