const breakpoints = ['40em', '52em', '64em', '80em'];

// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

// default fontSizes
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];

export default {
	space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 64, 128, 256, 512],
	breakpoints,
};