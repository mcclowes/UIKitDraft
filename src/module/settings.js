//1	12	0.0833333333333333
//2	12	0.166666666666667
//3	12	0.25
//5	12	0.416666666666667
//8	12	0.666666666666667
//13	12	1.08333333333333
/*
const shadingScale = 12
const shadingValues = {
  1: 1 / shadingScale,
  2: 2 / shadingScale,
  3: 3 / shadingScale,
  4: 5 / shadingScale,
  5: 8 / shadingScale,
  6: 13 / shadingScale
}
*/

/*
try to get everything tight with only and applying fibonacci
spacesBase
colorsBase
textSizeBase
*/

let settings = {
  textScale: 3,
  spacesScale: 4,
  fontName: 'Lato',
  textSize: '16px',
  textColor: 'black',
  invertedTextColor: '#ffffff',
  primaryColor: `#0075db`,
  primaryBackgroundColor: `#fafafa`,
  secondaryBackgroundColor: `#ffffff`,
  inputsBackgroundColor: `#ffffff`,
  linesColor: '#e6e6e6',
  linesStyle: `solid`,
  linesSize: `1px`,
  radius: '3px'
}

/*
settings = {
  textScale: 3,
  spacesScale: 4,
  fontName: 'Lato',
  textSize: '16px',
  textColor: '#ffffff',
  invertedTextColor: '#000000',
  primaryColor: `#f4612e`,
  primaryBackgroundColor: `#000000`,
  secondaryBackgroundColor: `#161719`,
  inputsBackgroundColor: `#414147`,
  linesColor: '#2a2a2e',
  linesUnit: outlineSizeUnit,
  linesValue: outlineSizeValue,
  linesStyle: `solid`,
  linesSize: outlineSizeValue + outlineSizeUnit,
  radius: '3px'
}
*/

export default settings

/*
const googleFontName = 'Lato'
const googleFontSizes = '400,700,400italic,700italic'
const googleSubset = 'latin'
const googleProtocol = 'https://'
const googleFontRequest = `${googleFontName}:${googleFontSizes}&subset=${googleSubset}`
*/