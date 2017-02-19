import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { CustomSearchComponent } from '../custom-search/custom-search.component';
//import Airport from '../custom-search/airport.model';

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform {     
    transform(listCountries: Array<CustomSearchComponent>, digitado: string) {        
        digitado = digitado.toLowerCase();
        return listCountries.filter((country) => {
            return country.name.toLowerCase().includes(digitado)
        });        
    }
}

