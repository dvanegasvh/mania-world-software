import React from 'react';
import { ICardProps } from './models/CardProps';

export const Card: React.FC<ICardProps> = ({ children, customStyles }) => {
	return (
		<div
			className={`!z-5 relative flex flex-col rounded-[12px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none p-4 ${customStyles}`}
		>
			{children}
		</div>
	);
};
