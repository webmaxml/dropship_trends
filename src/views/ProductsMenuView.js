let ProductsMenuView = Backbone.View.extend({

	init: function( controller ) {
		this.controller = controller;

		this.el = document.body;
		this.$el = $( this.el );

		this.delegateEvents({
			'click [data-cat-id]': 'handleClick' 
		});
	},

	handleClick: function( e ) { this.controller.handleCatClick( e ) },

});

export default ProductsMenuView;