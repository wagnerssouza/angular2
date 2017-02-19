import { Component, Input, Output, EventEmitter, OnInit, DoCheck } from '@angular/core';
import Airport from './airport.model';

@Component({    
    selector: 'custom-search',
    templateUrl: 'app/custom-search/custom-search.component.html'    
})

export class CustomSearchComponent implements ngDoCheck{ 
    
    @Input() name;    
    
    airports: Object[] = [];

    filterAirports: Object[] = [];

    listCountries: Object[] = [];

    @Input() checkOptionsList: boolean;
    @Input() search: string;    
    @Output() userUpdated = new EventEmitter();
    @Output() airportCode = new EventEmitter();


    constructor() { }

    ngDoCheck(){
        if(this.name) {            
            this.airports = this.name;
            this.listCountries = this.name.countries;
        }
    }

    valueChange(newValue) {
        this.search = newValue;
        this.checkOptionsList = true;
        // if((this.search.length > 0) && (this.search.trim() !== '')) {
        //     this.checkOptionsList = true;        
        // } else {
        //     this.checkOptionsList = false;  
        // }

    }

    setName(name) {
        this.search = name.name;
        var filtro = this.name.airports.filter(n => {            
            return n.country.name === name.name
        });
        this.filterAirports = filtro;
        this.checkOptionsList = true;
        this.userUpdated.emit(name);
    }

    clickAirportCode(airportCode) {        
        this.airportCode.emit(airportCode.iataCode);
    }
}