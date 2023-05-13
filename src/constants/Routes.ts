import { IRoutes, ROUTE_NAMES } from '@/models/Routes';

/**
 * This const is used to define the routes of the application.
 */
export const ROUTES: IRoutes = {
	[ROUTE_NAMES.BALANCE]: {
		path: '/',
		title: 'Movimientos',
		inNav: true,
	},
	[ROUTE_NAMES.INVENTORY]: {
		path: '/inventory',
		title: 'Inventario',
		inNav: true,
	},

	[ROUTE_NAMES.SALES]: {
		path: '#',
		title: 'Ventas',
		inNav: true,
		isDropdown: true,
		childPath: '/sale',
		subRoutes: [
			{
				path: '/sale',
				title: 'Crear venta',
			},
		],
	},
};
