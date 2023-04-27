import React from 'react';
import { ILayoutProps } from './models/LayoutProps';
import { Sidebar } from '@/components/sidebar/Sidebar';

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
	return (
		<div className="flex h-full w-full">
			<Sidebar />
			<div className="h-screen w-full bg-lightPrimary dark:!bg-navy-900 ">
				<main className="h-full flex-none transition-all">
					<div className="h-full">
						<div className="pt-5s mx-auto mb-auto min-h-[84vh]">{children}</div>
					</div>
				</main>
			</div>
		</div>
	);
};
