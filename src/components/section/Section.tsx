import React from 'react';
import { ISectionProps } from './models/SectionProps';

export const SectionContainer: React.FC<ISectionProps> = ({ children }) => {
	return <div className="section-container">{children}</div>;
};
