import React from 'react';
import { Links } from './components';

export const Sidebar: React.FC = () => {
	const open = true;
	return (
		<div
			className={`sm:none duration-175 linear w-[280px] !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 border-r border-gray-300 ${
				open ? 'translate-x-0' : '-translate-x-96'
			}`}
		>
			<div className="font-poppins text-[26px] uppercase text-secondary dark:text-white flex flex-col items-center my-[40px] ">
				<div>
					<span className="font-medium">MANIA</span> <span className="font-black text-primary">WORLD</span>
				</div>
				<div className="text-center text-[12px]">software</div>
			</div>
			<div className="mb-7 h-px bg-gray-300 dark:bg-white/30" />
			<Links />
		</div>
	);
};
