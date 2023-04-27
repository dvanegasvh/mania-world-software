import { IRoutes, ROUTE_NAMES } from '@/models/Routes';

/**
 * This const is used to define the routes of the application.
 */
export const ROUTES: IRoutes = {
	[ROUTE_NAMES.BALANCE]: {
		path: '/balance',
		title: 'Movimientos',
		inNav: true,
	},
	[ROUTE_NAMES.INVENTORY]: {
		path: '/inventory',
		title: 'Inventario',
		inNav: true,
	},
	[ROUTE_NAMES.SALE]: {
		path: '/sale',
		title: 'Crear venta',
	},
};
