(function () {
    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems =
        [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: "Twelve sided Gem",
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "https://unsplash.it/200/200?random",
                    thumb: "https://unsplash.it/100/100?random",
                },
                {
                    full: "https://unsplash.it/200/200?random",
                    thumb: "https://unsplash.it/100/100?random",
                },
                {
                    full: "https://unsplash.it/200/200?random",
                    thumb: "https://unsplash.it/100/100?random",
                },
            ],
            reviews: [
                {
                    stars: 1,
                    body: "This product Sucks",
                    author: "ggg@ggg.com"
                },
                {
                    stars: 4,
                    body: "This product is awesome",
                    author: "ggg@ggg.com"
                },
                {
                    stars: 5,
                    body: "This product was great",
                    author: "ggg@ggg.com"
                },

            ],
        },
         {
             name: 'Tri',
             price: 90.95,
             description: "3 sided Gem",
             canPurchase: true,
             soldOut: false,
             images: [
                {
                    full: "https://unsplash.it/200/200?random",
                    thumb: "https://unsplash.it/100/100?random",
                },
                {
                    full: "https://unsplash.it/200/200?random",
                    thumb: "https://unsplash.it/100/100?random",
                },
                {
                    full: "https://unsplash.it/200/200?random",
                    thumb: "https://unsplash.it/100/100?random",
                },
             ]
         },
          {
              name: 'Diamond',
              price: 2.95,
              description: "4 sided Gem",
              canPurchase: true,
              soldOut: false,
              images: [
                {
                    full: "https://unsplash.it/200/200?random",
                    thumb: "https://unsplash.it/100/100?random",
                },
                {
                    full: "https://unsplash.it/200/200?random",
                    thumb: "https://unsplash.it/100/100?random",
                },
                {
                    full: "https://unsplash.it/200/200?random",
                    thumb: "https://unsplash.it/100/100?random",
                },
              ]
          },
        ];

    app.controller("PanelController", function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        }
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        }
    });

})();

