let ModalsTriggersView = Backbone.View.extend({

	init: function( controller ) {
		this.controller = controller;

		this.el = document;
		this.$el = $( this.el );

		this.delegateEvents({
			'click [data-modal-trigger]': 'handleTriggerClick'
		});
	},

	handleTriggerClick: function( e ) { this.controller.handleTriggerClick( e ); }

});

export default ModalsTriggersView;