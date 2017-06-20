import 'slick-carousel';

let PartnersView = Backbone.View.extend({

	init: function() {
		this.el = document.getElementsByClassName( 'partners' )[0];
		this.$el = $( this.el );

		this.$slider = this.$el.find( '.partners__list' );

		this.$prevBtn = this.$el.find( '.partners__slide-prev' );
		this.$nextBtn = this.$el.find( '.partners__slide-next' );

		this.delegateEvents({
			'click .partners__slide-prev': 'goPrev',
			'click .partners__slide-next': 'goNext',
		});

		this.initCarousel();
	},

	initCarousel: function() {
		this.$slider.slick({
		  infinite: true,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  arrows: false,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});
	},

	goPrev: function( e ) {
		this.$slider.slick( 'slickPrev' );
	},

	goNext: function( e ) {
		this.$slider.slick( 'slickNext' );
	}

});

export default PartnersView;