import React from 'react';
import { TitlePage } from '@/components/title-page';
import { getRouteTitle } from '@/utils/Routes';
import { ROUTE_NAMES } from '@/models/Routes';

export const Home: React.FC = () => {
	return (
		<section>
			<TitlePage title={getRouteTitle(ROUTE_NAMES.BALANCE)} />
		</section>
	);
};

export default Home;
