import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {IMyOptions, IMyDateModel, IMyDate} from 'mydatepicker';

@Component({
    selector: 'site',
    templateUrl: 'app/site/site.component.html'
})
export class SiteComponent {
    
    private myDatePickerOptions: IMyOptions = {
        dateFormat: 'dd-mm-yyyy',
    };   

    private initialDate: IMyDate = {year: 0, month: 0, day: 0};
    private endDate: IMyDate = {year: 0, month: 0, day: 0};

    //private selDate: IMyDate = {year: 0, month: 0, day: 0};


    private model1: Object = { date: { year: 2018, month: 10, day: 9 } };

  
     oneWayFlight: Object[] = [];
     returnFlight: Object[] = [];

     constructor(http: Http) {
         let d: Date = new Date();
        this.initialDate = {year: d.getFullYear(), 
                        month: d.getMonth() + 1, 
                        day: d.getDate()};

        this.endDate = {year: d.getFullYear(), 
                            month: d.getMonth() + 1, 
                            day: d.getDate()};
         http
        .get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/')
        .map(res => res.json())
        .subscribe(air => {
            this.oneWayFlight = air;
            this.returnFlight = air;
            console.log(this.returnFlight);               
        }, 
        erro => console.log(erro),
        () => console.log('Resolveu essa porra'));

     }

     

     dates(initialDate, endDate) {
         console.log(initialDate.formatted, endDate.formatted);
     }
        
    


       

    handleUserUpdatedIda(user) {
        //console.log('vai cuzaaaaao cuzao do caralho, vai viajar né?? ', user);
    }

    handleUserUpdatedVolta(user) {
       // console.log('volta cuzaaaaao ',user);
    }

    getAirportCodeFrom(code) {
        console.log('from ', code);
    }

    getAirportCodeTo(code) {
        console.log('to ', code);
    }
    
}