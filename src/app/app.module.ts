import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        // Derectives/Pipes
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        // Services
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
