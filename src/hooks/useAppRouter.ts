import { useRouter } from 'next/router';

export const useAppRouter = (): { navigate: (route: string) => void; currentRoute: string } => {
	const router = useRouter();
	const currentRoute = router.pathname;

	const navigate = (route: string): void => {
		if (route !== '#') {
			router.push(route);
		}
	};

	return {
		navigate,
		currentRoute,
	};
};
