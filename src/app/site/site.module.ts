import { NgModule } from '@angular/core'; 
import { SiteComponent } from './site.controller';
import { CustomSearchComponent } from '../custom-search/custom-search.component';
import { FiltroPorTitulo } from '../pipes/filter.pipes';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [FormsModule, BrowserModule, HttpModule, MyDatePickerModule],
    declarations: [SiteComponent, CustomSearchComponent, FiltroPorTitulo ],
    exports: [SiteComponent]
})

export class SiteModule {}