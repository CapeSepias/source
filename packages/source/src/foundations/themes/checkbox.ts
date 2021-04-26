import { border, brandBorder } from '../palette/border';
import { background, brandBackground } from '../palette/background';
import { brandText, text } from '../palette/text';
import { userFeedbackBrand, userFeedbackDefault } from './user-feedback';
import { labelBrand, labelDefault } from './label';

export const checkboxDefault = {
	checkbox: {
		border: border.input,
		borderHover: border.inputHover,
		borderChecked: border.inputChecked,
		borderError: border.error,
		backgroundChecked: background.inputChecked,
		textLabel: text.inputLabel,
		textLabelSupporting: text.inputLabelSupporting,
		textIndeterminate: text.supporting,
	},
	...userFeedbackDefault,
	...labelDefault,
};

export const checkboxBrand = {
	checkbox: {
		border: brandBorder.input,
		borderHover: brandBorder.inputHover,
		borderChecked: brandBorder.inputChecked,
		borderError: brandBorder.error,
		backgroundChecked: brandBackground.inputChecked,
		textLabel: brandText.inputLabel,
		textLabelSupporting: brandText.inputLabelSupporting,
		textIndeterminate: brandText.supporting,
	},
	...userFeedbackBrand,
	...labelBrand,
};
