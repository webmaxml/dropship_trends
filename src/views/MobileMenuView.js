let MobileMenuView = Backbone.View.extend({

	init: function( controller ) {
		this.controller = controller;

		this.el = document.getElementsByClassName( 'mobile-menu' )[0];
		this.$el = $( this.el );
		this.$closeBtn = this.$el.find( '.mobile-menu__close-btn' );
		this.$closeBtnIcon = this.$el.find( '.mobile-menu__close-icon' );

		this.delegateEvents({
			click: 'handleClick'
		});
	},

	handleClick: function( e ) { this.controller.handleMobileClick( e ); },

	show: function() {
		this.$el.animate({
			right: 0
		}, 300 );
	},

	hide: function() {
		this.$el.animate({
			right: '-150%'
		}, 300);
	}

});

export default MobileMenuView;