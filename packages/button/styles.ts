import { css } from "@emotion/core"
import { textSans, palette, size, focusHalo } from "@guardian/src-foundations"

export const button = css`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	font-weight: bold;
	text-decoration: none;
	${textSans({ level: 3, fontWeight: "bold" })};
	box-sizing: border-box;
	padding: 0 ${size.large / 2}px;
	border: none;
	border-radius: ${size.large / 2}px;
	background: transparent;
	cursor: pointer;
	transition: 0.3s ease-in-out;

	&:focus {
		${focusHalo};
	}

	&:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}
`

export const highPriority = css`
	background-color: ${palette.yellow.main};
	color: ${palette.neutral[7]};

	&:hover :not(:disabled) {
		background-color: ${palette.yellow.dark};
	}
`

export const defaultPriority = css`
	background-color: ${palette.neutral[20]};
	color: ${palette.neutral[100]};

	&:hover :not(:disabled) {
		background-color: ${palette.neutral[46]};
	}
`

export const moderatePriority = css`
	background-color: ${palette.neutral[93]};
	color: ${palette.neutral[7]};

	&:hover :not(:disabled) {
		background-color: ${palette.neutral[86]};
	}
`

export const lowPriority = css`
	background-color: ${palette.neutral[100]};
	color: ${palette.neutral[7]};

	&:hover :not(:disabled) {
		background-color: ${palette.neutral[93]};
	}
`

export const defaultSize = css`
	height: ${size.large}px;
	min-height: ${size.large}px;
`

export const smallSize = css`
	height: ${size.medium}px;
	min-height: ${size.medium}px;
`

export const icon = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.large / 2}px;
		height: auto;
	}
`

export const iconLeft = css`
	svg {
		margin: 0 ${-size.large / 8}px 0 ${size.large / 4}px;
	}
`

export const iconRight = css`
	flex-direction: row-reverse;
	svg {
		margin: 0 ${size.large / 4}px 0 ${-size.large / 8}px;
	}
`