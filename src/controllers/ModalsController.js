class ModalsController {

	constructor( triggers, modals, mobile, registrationView, loginView, supportView ) {		
		this.triggers = triggers;
		this.modals = modals;
		this.mobile = mobile;
		this.registrationView = registrationView;
		this.loginView = loginView;
		this.supportView = supportView;
	}

	init() {
		this.mobile.init( this );
		this.triggers.init( this );
		this.modals.init( this );
		this.registrationView.init( this );
		this.loginView.init( this );
		this.supportView.init( this );
	}

	handleMobileClick( e ) {
		let isTrigger = typeof e.target.dataset.modalTrigger !== 'undefined';

		if ( e.target === this.mobile.el ||
			 e.target === this.mobile.$closeBtn.get(0) ||
			 e.target === this.mobile.$closeBtnIcon.get(0) || isTrigger ) {
			this.mobile.hide();
		}
	}

	handleTriggerClick( event ) {
		let modalId = event.currentTarget.dataset.modalTrigger;

		if ( modalId === 'mobile' ) {
			this.mobile.show();
		} else {
			this.modals.openModal( modalId );
		}
	}

	handleModalClick( event ) {
		let target = event.target;
		let isTrigger = typeof target.dataset.modalTrigger !== 'undefined';
		let modalId = event.currentTarget.dataset.modalItem;

		if ( target.classList.contains( 'modals__overlay' ) || 
			 target.classList.contains( 'modals__close-btn' ) ||
			 target.classList.contains( 'modals__close-icon' ) || isTrigger ) {
			this.modals.hideModal( modalId );
		}

	}

}

export default ModalsController;