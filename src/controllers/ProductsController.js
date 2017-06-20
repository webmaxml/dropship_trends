class ProductsController {

	constructor( productsView, menuView ) {
		this.productsView = productsView;
		this.menuView = menuView;
	}

	init( catId ) {
		this.productsView.init( this );
		this.menuView.init( this );

		if ( catId ) {
			catId = isNaN( +catId ) ? 1 : +catId;
		} else {
			catId = 1;
		}

		this.productsView.showList( catId );
	}

	handleCatClick( e ) {
		e.preventDefault();

		let id = +e.target.dataset.catId;
		this.productsView.showList( id );

		// menu height - margin-top - top-menu-height
		let top = this.productsView.el.offsetTop - 66 - 20 - 60;
		$( "html, body" ).animate({ scrollTop: top }, "slow");
	}

}

export default ProductsController;