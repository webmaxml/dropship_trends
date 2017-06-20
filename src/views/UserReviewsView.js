import 'slick-carousel';

let UserReviewsView = Backbone.View.extend({

	init: function() {
		this.el = document.getElementsByClassName( 'user-review' )[0];
		this.$el = $( this.el );

		this.$slider = this.$el.find( '.user-review__list' );

		this.initCarousel();
	},

	initCarousel: function() {
		this.$slider.slick({
		  infinite: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  arrows: false,
		});
	}
});

export default UserReviewsView;