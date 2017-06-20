let ContactsMenuView = Backbone.View.extend({

	init: function() {
		this.el = document.getElementsByClassName( 'contacts-trigger' );
		this.$el = $( this.el );

		this.$contactsSection = $( document.getElementsByClassName( 'contacts' )[0] );

		this.delegateEvents({
			click: 'scrollToContacts'
		});
	},

	scrollToContacts: function( e ) {
		e.preventDefault();

		let top = this.$contactsSection.get(0).offsetTop;
		$( "html, body" ).animate({ scrollTop: top }, "slow");
	}

});

export default ContactsMenuView;