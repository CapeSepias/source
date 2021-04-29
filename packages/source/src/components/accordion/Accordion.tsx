import React, { ReactElement } from 'react';
import { accordion } from './styles';
import { Props } from '../../helpers';

interface AccordionProps extends Props {
	hideToggleLabel?: boolean;
	children: ReactElement[];
}

export const Accordion = ({
	hideToggleLabel = false,
	children,
	cssOverrides,
	...props
}: AccordionProps) => {
	return (
		<div
			css={(theme) => [accordion(theme.accordion && theme), cssOverrides]}
			{...props}
		>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, { hideToggleLabel });
			})}
		</div>
	);
};
