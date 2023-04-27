import React from 'react';
import { Button, ButtonProps } from 'antd';

export const PrimaryButton: React.FC<Omit<ButtonProps, 'type'>> = props => {
	return (
		<Button
			{...props}
			size="large"
			type="default"
			className={`border-primary border-2 hover:!border-primary-darkness hover:!text-primary-darkness  hover:bg-opacity-40 text-primary font-semibold font-poppins flex items-center ${props.className}`}
		>
			{props.children}
		</Button>
	);
};

export const SecondaryButton: React.FC<Omit<ButtonProps, 'type'>> = props => {
	return (
		<Button
			{...props}
			size="large"
			type="primary"
			className={`bg-primary bg-opacity font-poppins font-semibold text-lightPrimary hover:!bg-primary-dark ${props.className}`}
		>
			{props.children}
		</Button>
	);
};
