import { iconSize, size } from '../../config/size';
import { pxToRem } from '../utils/px-to-rem';

/*
   The size scale is based entirely on the medium, small and
   xsmall buttons. The medium size meets WCAG 2.1 AAA compliance
   for touch targets.
*/

const remSize: { [K in keyof typeof size]: number } = {
	xsmall: pxToRem(size.xsmall),
	small: pxToRem(size.small),
	medium: pxToRem(size.medium),
};

const remIconSize: { [K in keyof typeof iconSize]: number } = {
	xsmall: pxToRem(iconSize.xsmall),
	small: pxToRem(iconSize.small),
	medium: pxToRem(iconSize.medium),
};

export const height = {
	ctaMedium: size.medium,
	ctaSmall: size.small,
	ctaXsmall: size.xsmall,
	inputMedium: size.medium,
	inputXsmall: size.xsmall,
	iconMedium: iconSize.medium,
	iconSmall: iconSize.small,
	iconXsmall: iconSize.xsmall,
};

export const remHeight = {
	ctaMedium: remSize.medium,
	ctaSmall: remSize.small,
	ctaXsmall: remSize.xsmall,
	inputMedium: remSize.medium,
	inputXsmall: remSize.xsmall,
	iconMedium: remIconSize.medium,
	iconSmall: remIconSize.small,
	iconXsmall: remIconSize.xsmall,
};

export const width = {
	ctaMedium: size.medium,
	ctaSmall: size.small,
	ctaXsmall: size.xsmall,
	inputXsmall: size.xsmall,
	iconMedium: iconSize.medium,
	iconSmall: iconSize.small,
	iconXsmall: iconSize.xsmall,
};

export const remWidth = {
	ctaMedium: remSize.medium,
	ctaSmall: remSize.small,
	ctaXsmall: remSize.xsmall,
	inputXsmall: remSize.xsmall,
	iconMedium: remIconSize.medium,
	iconSmall: remIconSize.small,
	iconXsmall: remIconSize.xsmall,
};
