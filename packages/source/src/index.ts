// ############################# accessibility #############################

export {
	descriptionId,
	focusHalo,
	generateSourceId,
	visuallyHidden,
} from './foundations/accessibility';

// ############################# animation #############################

export { transitions } from '../config/animation';

// ############################# breakpoints #############################

export { breakpoints } from '../config/breakpoints';
export type { Breakpoint } from '../config/breakpoints';

// ############################# media queries #############################

export { between, from, until } from './foundations/media-queries';
export type { BreakpointMap } from './foundations/media-queries';

// ############################# palette #############################

export {
	brand,
	brandAlt,
	culture,
	error,
	labs,
	lifestyle,
	neutral,
	news,
	opinion,
	specialReport,
	sport,
	success,
} from './foundations/palette';
export {
	background,
	brandAltBackground,
	brandBackground,
} from './foundations/palette/background';
export {
	border,
	brandAltBorder,
	brandBorder,
} from './foundations/palette/border';
export { brandAltLine, brandLine, line } from './foundations/palette/line';
export { brandAltText, brandText, text } from './foundations/palette/text';

// ############################# size #############################

export { height, remHeight, remWidth, width } from './foundations/size';

// ############################# space #############################

export { remSpace, space } from './foundations/space';

// ############################# themes #############################

export { brand, brandAlt, defaultTheme } from './foundations/themes';
export { choiceCardDefault } from './foundations/themes/choice-card';
export { accordionDefault } from './foundations/themes/accordion';
export {
	buttonBrand,
	buttonBrandAlt,
	buttonDefault,
} from './foundations/themes/button';
export type { ButtonTheme } from './foundations/themes/button';
export { checkboxBrand, checkboxDefault } from './foundations/themes/checkbox';
export { footerBrand } from './foundations/themes/footer';
export { labelBrand, labelDefault } from './foundations/themes/label';
export {
	linkBrand,
	linkBrandAlt,
	linkDefault,
} from './foundations/themes/link';
export type { LinkTheme } from './foundations/themes/link';
export { radioBrand, radioDefault } from './foundations/themes/radio';
export { selectDefault } from './foundations/themes/select';
export { textInputDefault } from './foundations/themes/text-input';
export {
	userFeedbackBrand,
	userFeedbackDefault,
} from './foundations/themes/user-feedback';

// ############################# icons #############################

export { SvgAlert } from './icons/alert';
export { SvgAlertRound } from './icons/alert-round';
export { SvgAlertTriangle } from './icons/alert-triangle';
export { SvgArrowDownStraight } from './icons/arrow-down-straight';
export { SvgArrowLeftStraight } from './icons/arrow-left-straight';
export { SvgArrowRightStraight } from './icons/arrow-right-straight';
export { SvgArrowUpStraight } from './icons/arrow-up-straight';
export { SvgAudio } from './icons/audio';
export { SvgCamera } from './icons/camera';
export { SvgCheckmark } from './icons/checkmark';
export { SvgChevronDownSingle } from './icons/chevron-down-single';
export { SvgChevronLeftSingle } from './icons/chevron-left-single';
export { SvgChevronRightSingle } from './icons/chevron-right-single';
export { SvgChevronUpSingle } from './icons/chevron-up-single';
export { SvgCreditCard } from './icons/credit-card';
export { SvgCross } from './icons/cross';
export { SvgDirectDebit } from './icons/direct-debit';
export { SvgDirectDebitWide } from './icons/direct-debit-wide';
export { SvgEnvelope } from './icons/envelope';
export { SvgExternal } from './icons/external';
export { SvgEye } from './icons/eye';
export { SvgEyeStrike } from './icons/eye-strike';
export { SvgFacebook } from './icons/facebook';
export { SvgHouse } from './icons/house';
export { SvgIndent } from './icons/indent';
export { SvgInfo } from './icons/info';
export { SvgLinkedIn } from './icons/linked-in';
export { SvgMessenger } from './icons/messenger';
export { SvgMinus } from './icons/minus';
export { SvgPerson } from './icons/person';
export { SvgPayPal } from './icons/paypal';
export { SvgPlay } from './icons/play';
export { SvgPlus } from './icons/plus';
export { SvgPinterest } from './icons/pinterest';
export { SvgQuote } from './icons/quote';
export { SvgSettings } from './icons/settings';
export { SvgSpeechBubble } from './icons/speech-bubble';
export { SvgStar } from './icons/star';
export { SvgTickRound } from './icons/tick-round';
export { SvgTwitter } from './icons/twitter';
export { SvgVideo } from './icons/video';
export { SvgWhatsApp } from './icons/whats-app';
