/**
 * This is the model of the Card component props.
 *
 * @interface CardProps
 * @property {React.ReactNode || React.ReactNode[]} children - The children of the component.
 * @property {string} customStyles - Optional custom styles of the component.
 */
export interface ICardProps {
	children: React.ReactNode | React.ReactNode[];
	customStyles?: string;
}
