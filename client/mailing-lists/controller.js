/**
 * External Dependencies
 */
import omit from 'lodash/omit';
import ReactDom from 'react-dom';
import React from 'react';
import { setSection } from 'state/ui/actions';

/**
 * Internal Dependencies
 */
import MainComponent from './main';

export default {
	unsubscribe( context ) {
		// We don't need the sidebar here.
		context.store.dispatch( setSection( 'me', {
			hasSidebar: false
		} ) );

		ReactDom.render(
			React.createElement( MainComponent, {
				email: context.query.email,
				category: context.query.category,
				hmac: context.query.hmac,
				context: omit( context.query, [ 'email', 'category', 'hmac' ] )
			} ),
			document.getElementById( 'primary' )
		);
	}
};
