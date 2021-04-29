// Arrays of colours should have pillar colors first
// e.g. for sport:
// const [sport300, sport400, sport500, sport600, sport800] = colors.blue
const colors = {
	reds: [
		'#660505', //news-100
		'#8B0000', //news-200
		'#AB0613', //news-300
		'#C70000', //news-400, error-400
		'#FF5943', //news-500
		'#FF9081', //news-550, error-500
		'#FFBAC8', //news-600
		'#FFF4F2', //news-800
	],
	oranges: [
		'#672005', //opinion-100
		'#8D2700', //opinion-200
		'#CB4700', //opinion-300
		'#E05E00', //opinion-400
		'#FF7F0F', //opinion-500
		'#FF9941', //opinion-550
		'#F9B376', //opinion-600
		'#FEF9F5', //opinion-800
	],
	blues: [
		'#003C60', //sport-100
		'#004E7C', //sport-200
		'#005689', //sport-300
		'#0084C6', //sport-400
		'#00B2FF', //sport-500
		'#90DCFF', //sport-600
		'#F1F8FC', //sport-800
		'#001536', //brand-100
		'#041F4A', //brand-300
		'#052962', //brand-400
		'#007ABC', //brand-500
		'#506991', //brand-600
		'#C1D8FC', //brand-800
	],
	browns: [
		'#2B2625', //culture-50
		'#3E3323', //culture-100
		'#574835', //culture-200
		'#6B5840', //culture-300
		'#A1845C', //culture-400
		'#EACCA0', //culture-500
		'#E7D4B9', //culture-600
		'#EFE8DD', //culture-700
		'#FBF6EF', //culture-800
	],
	pinks: [
		'#510043', //lifestyle-100
		'#650054', //lifestyle-200
		'#7D0068', //lifestyle-300
		'#BB3B80', //lifestyle-400
		'#FFABDB', //lifestyle-500
		'#FEC8D3', //lifestyle-600
		'#FEEEF7', //lifestyle-800
	],
	yellows: [
		'#F3C100', //brandAlt-200
		'#FFD900', //brandAlt-300
		'#FFE500', //brandAlt-400
	],
	greens: [
		'#185E36', //green-300
		'#22874D', //green-400, success-400
		'#58D08B', //green-500, success-500
		'#4B8878', //labs-200
		'#65A897', //labs-300
		'#69D1CA', //labs-400
	],
	grays: [
		'#000000', //neutral-0
		'#121212', //neutral-7
		'#1A1A1A', //neutral-10
		'#333333', //neutral-20
		'#767676', //neutral-46
		'#999999', //neutral-60
		'#DCDCDC', //neutral-86
		'#EDEDED', //neutral-93
		'#F6F6F6', //neutral-97
		'#FFFFFF', //neutral-100
		'#222527', //specialReport-100
		'#303538', //specialReport-200
		'#3F464A', //specialReport-300
		'#595C5F', //specialReport-400
		'#9DA0A2', //specialReport-450
		'#ABC2C9', //specialReport-500
		'#E4E5E8', //specialReport-700
		'#EFF1F2', //specialReport-800
	],
};

export const brand = {
	100: colors.blues[7],
	300: colors.blues[8],
	400: colors.blues[9],
	500: colors.blues[10],
	600: colors.blues[11],
	800: colors.blues[12],
};

export const brandAlt = {
	200: colors.yellows[0],
	300: colors.yellows[1],
	400: colors.yellows[2],
};

export const neutral = {
	0: colors.grays[0],
	7: colors.grays[1],
	10: colors.grays[2],
	20: colors.grays[3],
	46: colors.grays[4],
	60: colors.grays[5],
	86: colors.grays[6],
	93: colors.grays[7],
	97: colors.grays[8],
	100: colors.grays[9],
};

export const error = {
	400: colors.reds[3],
	500: colors.reds[5],
};

export const success = {
	400: colors.greens[1],
	500: colors.greens[2],
};

export const news = {
	100: colors.reds[0],
	200: colors.reds[1],
	300: colors.reds[2],
	400: colors.reds[3],
	500: colors.reds[4],
	550: colors.reds[5],
	600: colors.reds[6],
	800: colors.reds[7],
};

export const opinion = {
	100: colors.oranges[0],
	200: colors.oranges[1],
	300: colors.oranges[2],
	400: colors.oranges[3],
	500: colors.oranges[4],
	550: colors.oranges[5],
	600: colors.oranges[6],
	800: colors.oranges[7],
};

export const sport = {
	100: colors.blues[0],
	200: colors.blues[1],
	300: colors.blues[2],
	400: colors.blues[3],
	500: colors.blues[4],
	600: colors.blues[5],
	800: colors.blues[6],
};

export const culture = {
	50: colors.browns[0],
	100: colors.browns[1],
	200: colors.browns[2],
	300: colors.browns[3],
	400: colors.browns[4],
	500: colors.browns[5],
	600: colors.browns[6],
	700: colors.browns[7],
	800: colors.browns[8],
};

export const lifestyle = {
	100: colors.pinks[0],
	200: colors.pinks[1],
	300: colors.pinks[2],
	400: colors.pinks[3],
	500: colors.pinks[4],
	600: colors.pinks[5],
	800: colors.pinks[6],
};

export const labs = {
	200: colors.greens[3],
	300: colors.greens[4],
	400: colors.greens[5],
};

export const specialReport = {
	100: colors.grays[10],
	200: colors.grays[11],
	300: colors.grays[12],
	400: colors.grays[13],
	450: colors.grays[14],
	500: colors.grays[15],
	700: colors.grays[16],
	800: colors.grays[17],
};
