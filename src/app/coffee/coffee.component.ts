import { Coffee } from './../logic/coffee';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit, OnDestroy {

  coffee: Coffee;

  private routingSubscription: Subscription;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.coffee = new Coffee();

    this.routingSubscription = this.router.params.subscribe( data => {
      console.log('params', data.id);
    })
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
