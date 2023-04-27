/**
 * The props for the TitlePage component.
 *
 * @interface ITitlePageProps
 * @property {string} title - The title of the page.
 * @property {React.ReactNode | React.ReactNode[]} children - The children of the page.
 */
export interface ITitlePageProps {
	title: string;
	children?: React.ReactNode | React.ReactNode[];
}
