import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN } from './config';

@NgModule({
    declarations: [
        // Derectives/Pipes
        AppComponent,
        HeaderComponent,
        CardComponent,
        ProductsFilterPipe,
        TooltipDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        ProductsService,
        {
            provide: BASE_URL_TOKEN,
            useValue: BASE_URL,
            multi: true
        },
        {
            provide: 'BASE_URL',
            useValue: 'http://localhost:3000',
            multi: true
        }
        // Services
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
