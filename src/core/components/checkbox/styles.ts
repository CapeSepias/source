import { css } from '@emotion/react';
import { space, transitions } from '@guardian/src-foundations';
import { height, width } from '@guardian/src-foundations/size';
import { textSans } from '@guardian/src-foundations/typography';
import { focusHalo } from '@guardian/src-foundations/accessibility';
import { checkboxDefault } from '@guardian/src-foundations/themes';
import { resets } from '@guardian/src-foundations/utils';

export const fieldset = css`
	${resets.fieldset};
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

export const label = ({ checkbox } = checkboxDefault) => css`
	position: relative;
	display: flex;
	align-items: center;
	cursor: pointer;
	min-height: ${height.inputMedium}px;

	&:hover {
		input {
			border-color: ${checkbox.borderHover};
		}
	}
`;

export const labelWithSupportingText = css`
	align-items: flex-start;
	margin-bottom: ${space[3]}px;
`;

export const checkbox = ({ checkbox } = checkboxDefault) => css`
	flex: 0 0 auto;
	box-sizing: border-box;
	display: inline-block;
	cursor: pointer;
	width: ${width.inputXsmall}px;
	height: ${height.inputXsmall}px;
	margin: 0 ${space[2]}px 0 0;

	border: 2px solid currentColor;
	position: relative;
	transition: box-shadow ${transitions.short};
	transition-delay: 0.08s;

	color: ${checkbox.border};

	&:focus {
		${focusHalo};
	}

	@supports (appearance: none) {
		appearance: none;
		&:checked {
			border: 2px solid ${checkbox.borderChecked};

			& ~ span:before {
				right: 0;
			}
			& ~ span:after {
				top: 0;
			}
		}

		&:indeterminate {
			&:after {
				${textSans.xlarge()};
				color: ${checkbox.textIndeterminate};
				content: '-';
				position: absolute;
				top: -10px;
				left: 5px;
				z-index: 5;
			}
		}
	}
`;

export const labelText = ({ checkbox } = checkboxDefault) => css`
	${textSans.medium({ lineHeight: 'regular' })};
	color: ${checkbox.textLabel};
	width: 100%;
`;

export const labelTextWithSupportingText = css`
	${textSans.medium({ lineHeight: 'regular' })};
`;

export const supportingText = ({ checkbox } = checkboxDefault) => css`
	${textSans.small({ lineHeight: 'regular' })};
	color: ${checkbox.textLabelSupporting};
`;

export const tick = ({ checkbox } = checkboxDefault) => css`
	@supports (appearance: none) {
		/* overall positional properties */
		position: absolute;
		width: 6px;
		height: 12px;
		transform: rotate(45deg);
		/*
			these properties are very sensitive and are overridden
			if the checkbox has a label or supporting text
		*/
		top: 14px;
		left: 9px;
		/*
			this prevents simulated click events to the checkbox, eg from Selenium tests
			from being intercepted by the tick
		*/
		pointer-events: none;

		/* the checkmark ✓ */
		&:after,
		&:before {
			position: absolute;
			display: block;
			background-color: ${checkbox.backgroundChecked};
			transition: all ${transitions.short} ease-in-out;
			content: '';
		}

		/* the short side */
		&:before {
			height: 2px;
			bottom: 0;
			left: 0;
			right: 100%;
			transition-delay: 0.05s;
		}

		/* the long side */
		&:after {
			bottom: 0;
			right: 0;
			top: 100%;
			width: 2px;
			transition-delay: 0.1s;
		}
	}
`;

export const tickWithLabelText = css`
	@supports (appearance: none) {
		top: 15px;
		left: 9px;
	}
`;

export const tickWithSupportingText = css`
	@supports (appearance: none) {
		top: 5px;
	}
`;

export const errorCheckbox = ({ checkbox } = checkboxDefault) => css`
	border: 4px solid ${checkbox.borderError};
`;
