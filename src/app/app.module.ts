import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProductsFilterPipe } from './products-filter.pipe';

@NgModule({
    declarations: [
        // Derectives/Pipes
        AppComponent,
        HeaderComponent,
        CardComponent,
        ProductsFilterPipe
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
