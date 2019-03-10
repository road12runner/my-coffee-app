import { DataService } from './../data.serive';
import { Component, OnInit } from '@angular/core';
import { Coffee } from '../logic/coffee';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

    coffeeList: Coffee[];

    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.dataService.getList( list => {
            this.coffeeList = list;
        })
    }
}