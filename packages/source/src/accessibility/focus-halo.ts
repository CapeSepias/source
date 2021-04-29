import { border } from '../palette/border';

export const focusHalo = `
	outline: 0;
	html:not(.src-focus-disabled) & {
		box-shadow: 0 0 0 5px ${border.focusHalo};
	}
`;
