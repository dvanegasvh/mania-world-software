import { ROUTES } from '@/constants/Routes';
import { useAppRouter } from '@/hooks/useAppRouter';
import { IRoute } from '@/models/Routes';

export const useSidebar = (): { navRoutes: IRoute[]; isActiveRoute: (route: string) => boolean; currentRoute: string } => {
	const { currentRoute } = useAppRouter();

	const createNavRoutes = (): IRoute[] => {
		return Object.values(ROUTES).filter(route => route.inNav);
	};

	const isActiveRoute = (route: string): boolean => {
		return currentRoute === route;
	};

	return {
		navRoutes: createNavRoutes(),
		isActiveRoute,
		currentRoute,
	};
};
