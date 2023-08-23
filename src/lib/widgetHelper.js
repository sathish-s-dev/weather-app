import icon1 from '../assets/icons/01d.png';
import icon2 from '../assets/icons/01n.png';
import icon3 from '../assets/icons/02d.png';
import icon4 from '../assets/icons/02n.png';
import icon5 from '../assets/icons/03d.png';
import icon6 from '../assets/icons/03n.png';
import icon7 from '../assets/icons/04d.png';
import icon8 from '../assets/icons/04n.png';
import icon9 from '../assets/icons/09d.png';
import icon10 from '../assets/icons/09n.png';
import icon11 from '../assets/icons/10d.png';
import icon12 from '../assets/icons/10n.png';
import icon13 from '../assets/icons/11d.png';
import icon14 from '../assets/icons/11n.png';
import icon15 from '../assets/icons/13d.png';
import icon16 from '../assets/icons/13n.png';
import icon17 from '../assets/icons/50d.png';
import icon18 from '../assets/icons/50n.png';

export const images = [
	{
		name: '01d',
		value: icon1,
	},
	{
		name: '01n',
		value: icon2,
	},
	{
		name: '02d',
		value: icon3,
	},
	{
		name: '02n',
		value: icon4,
	},
	{
		name: '03d',
		value: icon5,
	},
	{
		name: '03n',
		value: icon6,
	},
	{
		name: '04d',
		value: icon7,
	},
	{
		name: '04n',
		value: icon8,
	},
	{
		name: '09d',
		value: icon9,
	},
	{
		name: '09n',
		value: icon10,
	},
	{
		name: '10d',
		value: icon11,
	},
	{
		name: '10n',
		value: icon12,
	},
	{
		name: '11d',
		value: icon13,
	},
	{
		name: '11n',
		value: icon14,
	},
	{
		name: '13d',
		value: icon15,
	},
	{
		name: '13n',
		value: icon16,
	},
	{
		name: '50d',
		value: icon17,
	},
	{
		name: '50n',
		value: icon18,
	},
];

export const direction = (deg) => {
	if (deg > 3348.75 && deg <= 11.25) {
		return 'N';
	} else if (deg > 11.25 && deg <= 56.25) {
		return 'NE';
	} else if (deg > 56.25 && deg <= 101.25) {
		return 'E';
	} else if (deg > 101.25 && deg <= 146.25) {
		return 'SE';
	} else if (deg > 146.25 && deg <= 191.25) {
		return 'S';
	} else if (deg > 191.25 && deg <= 236.25) {
		return 'SW';
	} else if (deg > 236.25 && deg <= 281.25) {
		return 'W';
	} else if (deg > 281.25 && deg <= 326.25) {
		return 'NW';
	} else {
		return null;
	}
};

export const tempConv = (temp) => {
	let temprature = temp - 273.15;
	temprature = temprature.toFixed(1);
	return temprature;
};


