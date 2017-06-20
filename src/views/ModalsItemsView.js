let ModalsItemsView = Backbone.View.extend({

	init: function( controller ) {
		this.controller = controller;

		this.el = document;
		this.$el = $( this.el );

		this.delegateEvents({
			'click .modals__overlay': 'handleModalClick'
		});
	},

	handleModalClick: function( e ) { this.controller.handleModalClick( e ); },

	openModal: function( modalId ) {
		$( `[data-modal-item="${modalId}"]` ).css( 'display', 'flex' )
											 .animate({ opacity: 1 }, 'fast' );
	},

	hideModal: function( modalId ) {
		$( `[data-modal-item="${modalId}"]` ).animate({ opacity: 0 }, 'fast', function() {
			$( this ).css( 'display', 'none' );
		} );
	}

});

export default ModalsItemsView;