import '../assets/libs/jquery.maskedinput';
import 'jquery-validation';

let RegistrationView = Backbone.View.extend({

	init: function( controller ) {
		this.controller = controller;

		this.el = document.getElementsByClassName( 'registration__form' )[0];
		this.$el = $( this.el );
		this.$errorContainer = this.$el.find( '#regErrorContainer' );

		this.$el.find( '[name="phone"]' ).mask("\+38(0*9) 999-99-99");

		this.setValidation();
	},

	setValidation: function() {
		this.$el.validate({
			submitHandler: ( form, event ) => this.handleSubmit( form, event ),
			rules: {
				login: {
					required: true,
					minlength: 3
				},
				email: {
					required: true,
					email: true
				},
				pwd: {
					required: true,
					minlength: 6
				},
				pwd_repeat: {
					required: true,
					equalTo: '#regPwd'
				}
			},
			errorClass: 'registration__input--error',
			validClass: 'registration__input--valid',
			messages: {
				login: {
					required: '*Поле логина является обязательным',
					minlength: jQuery.validator.format( '*Длина логина должна быть минимум {0} символа' )
				},
				email: {
					required: '*Поле email является обязательным',
					email: '*Некорректный email'
				},
				pwd: {
					required: '*Поле пароля является обязательным',
					minlength: jQuery.validator.format( '*Длина пароля должна быть минимум {0} символов' )		
				},
				pwd_repeat: {
					required: '*Необходимо повторить пароль',
					equalTo: '*Пароли не совпадают'		
				}
			},
			errorLabelContainer: '#regErrorContainer',
			wrapper: 'li'
		});
	},

	handleSubmit: function( form, event ) { 
		console.log( $( form ).serialize() ); 
	}

});


export default RegistrationView;