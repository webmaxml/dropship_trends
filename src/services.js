import Bottle from 'bottlejs';

/************************ Models **************************/

import ProductList from './models/ProductList';

/************************ Controllers **************************/

import RouterController from './controllers/RouterController';
import ModalsController from './controllers/ModalsController';
import ProductsController from './controllers/ProductsController';

/************************ Views **************************/

import PartnersView from './views/PartnersView';
import UserReviewsView from './views/UserReviewsView';
import MobileMenuView from './views/MobileMenuView';
import ProductsView from './views/ProductsView';
import ProductsMenuView from './views/ProductsMenuView';
import ProductImageGalleryView from './views/ProductImageGalleryView';
import ContactsMenuView from './views/ContactsMenuView';
import ModalsTriggersView from './views/ModalsTriggersView';
import ModalsItemsView from './views/ModalsItemsView';
import RegistrationView from './views/RegistrationView';
import LoginView from './views/LoginView';
import SupportView from './views/SupportView';

/************************ Factories **************************/




let bottle = new Bottle();



/************************ Models **************************/

bottle.service( 'productList', ProductList);

/************************ Controllers **************************/

bottle.factory( 'routerController', container => {
	return new RouterController({
		partnersView: container.partnersView,
		userReviewsView: container.userReviewsView,
		modalsController: container.modalsController,
		productsController: container.productsController,
		productImageGalleryView: container.productImageGalleryView,
		contactsMenuView: container.contactsMenuView
	})
} );
bottle.service( 'modalsController', ModalsController,
									'modalsTriggersView',
									'modalsItemsView',
									'mobileMenuView',
									'registrationView', 
									'loginView',
									'supportView' );
bottle.service( 'productsController', ProductsController, 'productsView', 'productsMenuView' );

/************************ Views **************************/

bottle.service( 'partnersView', PartnersView );
bottle.service( 'userReviewsView', UserReviewsView );
bottle.service( 'mobileMenuView', MobileMenuView );
bottle.service( 'productsView', ProductsView );
bottle.service( 'productsMenuView', ProductsMenuView );
bottle.service( 'productImageGalleryView', ProductImageGalleryView );
bottle.service( 'contactsMenuView', ContactsMenuView );
bottle.service( 'modalsTriggersView', ModalsTriggersView );
bottle.service( 'modalsItemsView', ModalsItemsView );
bottle.service( 'registrationView', RegistrationView );
bottle.service( 'loginView', LoginView );
bottle.service( 'supportView', SupportView );

/************************ Factories **************************/



export default bottle;