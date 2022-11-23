const pixels = {
	xs: '480px',
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px',
	xxl: '1600px',
};

const screens = {
	xs: `screen and (max-width: ${ pixels.xs })`,
	sm: `screen and (max-width: ${ pixels.sm })`,
	md: `screen and (max-width: ${ pixels.md })`,
	lg: `screen and (max-width: ${ pixels.lg })`,
	tablet: 'screen and (min-device-width : 600px) and (max-device-width : 1024px)',
	smallRes: 'screen and (min-device-width : 600px) and (max-device-width : 1440px)',
};

export default {
	pixels: pixels,
	screens: screens
};
