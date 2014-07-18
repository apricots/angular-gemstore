(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = 
  [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'This is a shiny gem.',
      canPurchase: true,
      soldOut: true,
    },

    {
      name: 'Very Nice gem',
      price: 123.95,
      description: 'What would you do for this gem?',
      canPurchase: true,
      soldOut: false,

    },

    {
      name: 'AMAZING ONE OF A KIND',
      price: 3.92,
      description: 'Nice and green.',
      canPurchase: false,
      soldOut: false,

    }
  ];

  app.controller = ('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

})();