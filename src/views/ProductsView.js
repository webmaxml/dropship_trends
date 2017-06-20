let ProductsView = Backbone.View.extend({

	init: function( controller ) {
		this.controller = controller;

		this.el = document.getElementsByClassName( 'products__lists-list' )[0];
		this.$el = $( this.el );
	},

	showList: function( catId ) {
		this.$el.children( '.active' ).removeClass( 'active' ).fadeOut( 'fast' );
		this.$el.children( `[data-cat-list=${catId}]` ).addClass( 'active' ).fadeIn( 'fast' );
	}
});

export default ProductsView;