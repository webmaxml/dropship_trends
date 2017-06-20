import '../assets/libs/jquery.maskedinput';
import 'jquery-validation';

let SupportView = Backbone.View.extend({

	init: function( controller ) {
		this.controller = controller;

		this.el = document.getElementsByClassName( 'support__form' )[0];
		this.$el = $( this.el );

		this.$el.find( '[name="phone"]' ).mask("\+38(0*9) 999-99-99");

		this.setValidation();
	},

	setValidation: function() {
		this.$el.validate({
			submitHandler: ( form, event ) => this.handleSubmit( form, event ),
			rules: {
				name: {
					required: true,
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				}
			},
			errorClass: 'support__input--error',
			validClass: 'support__input--valid',
			messages: {
				name: {
					required: '*Поле имени является обязательным'
				},
				email: {
					required: '*Поле email является обязательным',
					email: '*Некорректный email'
				},
				message: {
					required: '*Поле сообщения является обязательным'
				}
			},
			errorLabelContainer: '#supportErrorContainer',
			wrapper: 'li'
		});
	},

	handleSubmit: function( form, event ) { 
		console.log( $( form ).serialize() ); 
	}

});


export default SupportView;