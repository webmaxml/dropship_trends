import 'jquery-validation';

let LoginView = Backbone.View.extend({

	init: function( controller ) {
		this.controller = controller;

		this.el = document.getElementsByClassName( 'login__form' )[0];
		this.$el = $( this.el );

		this.setValidation();
	},

	setValidation: function() {
		this.$el.validate({
			submitHandler: ( form, event ) => this.handleSubmit( form, event ),
			rules: {
				login: {
					required: true,
				},
				pwd: {
					required: true,
				}
			},
			errorClass: 'login__input--error',
			validClass: 'login__input--valid',
			messages: {
				login: {
					required: '*Поле логина является обязательным'
				},
				pwd: {
					required: '*Поле пароля является обязательным'
				}
			},
			errorLabelContainer: '#logErrorContainer',
			wrapper: 'li'
		});
	},

	handleSubmit: function( form, event ) { 
		console.log( $( form ).serialize() ); 
	}

});


export default LoginView;