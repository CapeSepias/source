import { neutral, brand, success, error, brandAlt, news } from '.';

export const brandAltText = {
	primary: neutral[7],
	supporting: neutral[60],
	ctaPrimary: neutral[100],
	ctaSecondary: neutral[7],
	ctaTertiary: neutral[7],
	anchorPrimary: neutral[7],
};

export const brandText = {
	primary: neutral[100],
	supporting: brand[800],
	success: success[500],
	error: error[500],
	ctaPrimary: brand[400],
	ctaSecondary: neutral[100],
	ctaTertiary: neutral[100],
	anchorPrimary: neutral[100],
	anchorPrimaryHover: brandAlt[400],
	userInput: neutral[100],
	inputLabel: neutral[100],
	inputLabelSupporting: brand[800],
};

export const text = {
	primary: neutral[7],
	supporting: neutral[46],
	success: success[400],
	error: error[400],
	ctaPrimary: neutral[100],
	ctaSecondary: brand[400],
	ctaTertiary: brand[400],
	anchorPrimary: brand[500],
	anchorSecondary: neutral[7],
	userInput: neutral[7],
	inputLabel: neutral[7],
	inputLabelSupporting: neutral[46],
	inputChecked: brand[400], //choice card only
	inputHover: brand[400], //choice card only
	groupLabel: neutral[7],
	groupLabelSupporting: neutral[46],
	newsInverse: news[550],
};
