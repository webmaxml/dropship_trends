let devRoutes = {
	'': 'root',
	'products.html': 'products',
	'product.html': 'product',
	'vendors.html': 'vendors'
};

let prodRoutes = {
	'': 'root',
	'products.html': 'products',
	'product.html': 'product',
	'vendors.html': 'vendors'
};

let routes = process.env.NODE_ENV === 'production' ? prodRoutes : devRoutes;

let RouterController = Backbone.Router.extend({

	routes,

	initialize: function( attrs ) {
		this.partnersView = attrs.partnersView;
		this.userReviewsView = attrs.userReviewsView;
		this.modalsController = attrs.modalsController;
		this.productsController = attrs.productsController;
		this.productImageGalleryView = attrs.productImageGalleryView;
		this.contactsMenuView = attrs.contactsMenuView;
		
		Backbone.history.start({ pushState: true });
	},

	root: function() {
		this.partnersView.init();
		this.userReviewsView.init();
		this.modalsController.init();
		this.contactsMenuView.init();
	},

	products: function() {
		let catId = this.getUrlParameter( 'cat' );

		this.modalsController.init();
		this.productsController.init( catId );
		this.contactsMenuView.init();
	},

	product: function() {
		this.modalsController.init();
		this.productImageGalleryView.init();
		this.contactsMenuView.init();
	},

	vendors: function() {
		this.modalsController.init();
		this.contactsMenuView.init();
	},

	getUrlParameter: function(name) {
	    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

	    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	    let results = regex.exec(location.search);

	    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	}

});

export default RouterController;
