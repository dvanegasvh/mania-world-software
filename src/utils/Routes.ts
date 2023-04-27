import { ROUTES } from '@/constants/Routes';
import { ROUTE_NAMES } from '@/models/Routes';

/**
 * This function is used to get the title of a route.
 * @param {ROUTE_NAMES} route - The route name.
 * @returns {string} - The title of the route.
 */
export const getRouteTitle = (route: ROUTE_NAMES): string => {
	return ROUTES[route].title;
};

/**
 * This function is used to get the path of a route.
 * @param {ROUTE_NAMES} route - The route name.
 * @returns {string} - The path of the route.
 */
export const getRoutePath = (route: ROUTE_NAMES): string => {
	return ROUTES[route].path;
};
