import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './content/products/card/card.component';
import { ProductsFilterPipe } from './content/products/products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductsService } from './content/products/products.service';
import { HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './content/products/products.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { OneProductComponent } from './content/products/one-product/one-product.component';
import { OneProductResolverService } from './content/products/one-product/one-product-resolver.service';
import { CustomPreloadService } from './common/services/custom-preload.service';

@NgModule({
    declarations: [
        // Derectives/Pipes
        AppComponent,
        HeaderComponent,
        CardComponent,
        ProductsFilterPipe,
        TooltipDirective,
        FooterComponent,
        ProductsComponent,
        OneProductComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadService })
    ],
    providers: [
        OneProductResolverService,
        ProductsService,
        CustomPreloadService,
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
