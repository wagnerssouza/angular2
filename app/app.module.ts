import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import { SiteModule } from './site/site.module';

@NgModule({
  imports:      [ SiteModule ],
  declarations: [ AppComponent ],
  bootstrap:   [ AppComponent ]
})

export class AppModule { }