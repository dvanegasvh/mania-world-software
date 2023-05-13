import React, { useState } from 'react';
import { useSidebar } from '../../hooks/useSidebar';
import { Menu, MenuProps } from 'antd';
import { useAppRouter } from '@/hooks/useAppRouter';

export const Links: React.FC = () => {
	const { navRoutes, isActiveRoute } = useSidebar();
	const { navigate, currentRoute } = useAppRouter();
	const [openKeys, setOpenKeys] = useState<string[]>([currentRoute]);

	const onOpenChange = (openKeys: string[]): void => {
		setOpenKeys([...openKeys]);
	};

	type MenuItem = Required<MenuProps>['items'][number];

	interface IPrueba {
		label: React.ReactNode;
		key: React.Key;
		onClick?: () => void;
		icon?: React.ReactNode;
		children?: MenuItem[];
		type?: 'group' | 'divider';
	}

	const getItem = ({ key, onClick, icon, children, label, type }: IPrueba): MenuItem => {
		return {
			key,
			onClick,
			icon,
			children,
			label,
			type,
		} as MenuItem;
	};

	const items = navRoutes.map(({ title, path, subRoutes, isDropdown, childPath }) =>
		getItem({
			key: isDropdown ? childPath || '' : path,
			label: (
				<div className={`rounded-md hover:bg-slate-50 ${!isActiveRoute(path) && 'hover:text-secondary'} `}>
					<span className="pl-4">{title}</span>
				</div>
			),
			onClick: () => navigate(path),
			children: isDropdown
				? subRoutes?.map(({ path, title }) => getItem({ key: `${path}`, label: title, onClick: () => navigate(path) }))
				: undefined,
		})
	);

	return <Menu items={items} mode="inline" selectedKeys={[currentRoute]} openKeys={openKeys} onOpenChange={onOpenChange} />;
};
