import {Component} from 'angular2/core';
import {Auction} from '../interfaces/auction';
import {AuctionService} from '../services/auction.service';

@Component({
    selector: 'auction',
    template: `<div *ngFor="#auction of auctions">
                <span>{{auction.name}}</span>
                <span>{{auction.price}}</span>
                <span *ngIf="auction.open">
                  <input type="number" value="{{auction.price + 5}}"/>
                  <button> BID </button>
                </span>
              </div>`,
    providers: [AuctionService]
})
export class AuctionComponent implements OnInit{
  auctions: Auction[];

  constructor(private _auctionService: AuctionService) {}

  getAuctions() {
    this._auctionService.getAuctions().then(auctions => this.auctions = auctions);
  }

  ngOnInit() {
    this.getAuctions();
  }
