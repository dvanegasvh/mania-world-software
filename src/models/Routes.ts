/**
 * This enum is used to define the names of the routes of the application.
 */
export enum ROUTE_NAMES {
	BALANCE,
	INVENTORY,
	SALE,
}

/**
 * This interface is used to define the routes structure.
 *
 * @interface IRoute
 * @property {string} path - The path of the route.
 * @property {string} title - The title of the route.
 * @property {string} icon - Optional icon of the route.
 * @property {boolean} inNav - Optional flag to indicate if the route is in the navigation.
 */
export interface IRoute {
	path: string;
	title: string;
	icon?: string;
	inNav?: boolean;
}

/**
 * This interface is used to define the routes of the application.
 */
export interface IRoutes {
	[key: string]: IRoute;
}
