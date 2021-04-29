import { SvgRoundelFilled } from './SvgRoundelFilled';
import { brand } from '../palette';

export const SvgRoundelBrand = () => {
	return <SvgRoundelFilled text="white" background={brand[400]} />;
};
