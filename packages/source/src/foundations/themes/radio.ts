import { userFeedbackDefault, userFeedbackBrand } from './user-feedback';
import { labelDefault, labelBrand } from './label';
import { border, brandBorder } from '../palette/border';
import { background, brandBackground } from '../palette/background';
import { brandText, text } from '../palette/text';

export const radioDefault = {
	radio: {
		borderHover: border.inputHover,
		border: border.input,
		backgroundChecked: background.inputChecked,
		textLabel: text.inputLabel,
		textLabelSupporting: text.inputLabelSupporting,
		borderError: border.error,
	},
	...labelDefault,
	...userFeedbackDefault,
};

export const radioBrand = {
	radio: {
		borderHover: brandBorder.inputHover,
		border: brandBorder.input,
		backgroundChecked: brandBackground.inputChecked,
		textLabel: brandText.inputLabel,
		textLabelSupporting: brandText.supporting,
		borderError: brandBorder.error,
	},
	...labelBrand,
	...userFeedbackBrand,
};
