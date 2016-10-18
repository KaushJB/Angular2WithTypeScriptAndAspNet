///<reference path="./../../typings/globals/core-js/index.d.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Import Our Components here...
import { AppComponent } from './app';

//Configure NgModule for required mdules/components
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }