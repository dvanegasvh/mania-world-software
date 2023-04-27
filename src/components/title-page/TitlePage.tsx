import React from 'react';
import { ITitlePageProps } from './models/TitlePageProps';

export const TitlePage: React.FC<ITitlePageProps> = ({ title, children }) => {
	return (
		<div className="text-[28px] font-medium bg-white">
			<div className="w-full px-6 py-2 flex justify-between">
				<p className="">{title}</p>
				<div>{children}</div>
			</div>

			<div className="bg-gray-300 h-[1px] left-0 right-0" />
		</div>
	);
};
