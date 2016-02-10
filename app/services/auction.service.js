System.register(['angular2/core', './mock-auctions'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_auctions_1;
    var AuctionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_auctions_1_1) {
                mock_auctions_1 = mock_auctions_1_1;
            }],
        execute: function() {
            AuctionService = (function () {
                function AuctionService() {
                }
                AuctionService.prototype.getAuctions = function () {
                    return Promise.resolve(mock_auctions_1.AUCTIONS);
                };
                AuctionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AuctionService);
                return AuctionService;
            })();
            exports_1("AuctionService", AuctionService);
        }
    }
});
//# sourceMappingURL=auction.service.js.map