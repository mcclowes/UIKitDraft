const scale = 4
const spacingUnit = `rem`
const spacingValues = {
  1: 1 / scale,
  2: 2 / scale,
  3: 3 / scale,
  4: 5 / scale,
  5: 8 / scale,
  6: 13 / scale
}

const fontsScale = 3
const fontSizeUnit = `rem`
const fontSizeValues = {
  1: 1 / fontsScale,
  2: 2 / fontsScale,
  3: 3 / fontsScale,
  4: 5 / fontsScale,
  5: 8 / fontsScale,
  6: 13 / fontsScale,
  7: 21 / fontsScale
}



//1	12	0.0833333333333333
//2	12	0.166666666666667
//3	12	0.25
//5	12	0.416666666666667
//8	12	0.666666666666667
//13	12	1.08333333333333
const shadingScale = 12
const shadingValues = {
  1: 1 / shadingScale,
  2: 2 / shadingScale,
  3: 3 / shadingScale,
  4: 5 / shadingScale,
  5: 8 / shadingScale,
  6: 13 / shadingScale
}

const outlineSizeUnit = `px`
const outlineSizeValue = 1

const radiusSizeUnit = `px`
const radiusSizeValue = 3

const textSizeUnit = `px`
const textSizeValue = 16

/*
try to get everything tight with only and applying fibonacci
spacesBase
colorsBase
textSizeBase

textSize
textColor
textInvertedColor
primaryColor: `#0075db`
primaryBackgroundColor: `#fafafa`
secondaryBackgroundColor: `#ffffff`
linesColor: '#e6e6e6'
disabledBackgroundColor: '#f2f2f2'
inputsBackgroundColor:
radius
linesStyle
linesSize
*/

let settings = {
  text: {
    fontName: 'Lato',
    color: 'black',
    invertedColor: '#ffffff',
    size: textSizeValue + textSizeUnit
  },
  colors: {
    primary: `#0075db`,
    primaryBackground: `#fafafa`,
    secondaryBackground: `#ffffff`,
    lines: '#e6e6e6',
  },
  radius: {
    unit: radiusSizeUnit,
    value: radiusSizeValue,
    size: radiusSizeValue + radiusSizeUnit
  },
  spaces: {
    unit: spacingUnit,
    values: spacingValues,
    1: spacingValues[1] + spacingUnit,
    2: spacingValues[2] + spacingUnit,
    3: spacingValues[3] + spacingUnit,
    4: spacingValues[4] + spacingUnit,
    5: spacingValues[5] + spacingUnit,
    6: spacingValues[6] + spacingUnit
  },
  fontSize: {
    unit: fontSizeUnit,
    values: fontSizeValues,
    1: fontSizeValues[1] + fontSizeUnit,
    2: fontSizeValues[2] + fontSizeUnit,
    3: fontSizeValues[3] + fontSizeUnit,
    4: fontSizeValues[4] + fontSizeUnit,
    5: fontSizeValues[5] + fontSizeUnit,
    6: fontSizeValues[6] + fontSizeUnit
  },
  lines: {
    unit: outlineSizeUnit,
    value: outlineSizeValue,
    style: `solid`,
    size: outlineSizeValue + outlineSizeUnit
  },
  inputs: {
    background: '#ffffff'
  },
  variations: {
    outlineAmount: 1 - 0.5,
    step1: 1 - 0.08,
    step2: 1 - 0.16,
    disabled: 1 - 0.4,
    disabledButton: 1 - 0.7,
  }
}

settings = {
  text: {
    fontName: 'Lato',
    color: 'white',
    invertedColor: 'black',
    size: textSizeValue + textSizeUnit
  },
  colors: {
    primary: `#f4612e`,
    primaryBackground: `black`,
    secondaryBackground: `#161719`,
    lines: '#2a2a2e',
  },
  radius: {
    unit: radiusSizeUnit,
    value: radiusSizeValue,
    size: radiusSizeValue + radiusSizeUnit
  },
  spaces: {
    unit: spacingUnit,
    values: spacingValues,
    1: spacingValues[1] + spacingUnit,
    2: spacingValues[2] + spacingUnit,
    3: spacingValues[3] + spacingUnit,
    4: spacingValues[4] + spacingUnit,
    5: spacingValues[5] + spacingUnit,
    6: spacingValues[6] + spacingUnit
  },
  fontSize: {
    unit: fontSizeUnit,
    values: fontSizeValues,
    1: fontSizeValues[1] + fontSizeUnit,
    2: fontSizeValues[2] + fontSizeUnit,
    3: fontSizeValues[3] + fontSizeUnit,
    4: fontSizeValues[4] + fontSizeUnit,
    5: fontSizeValues[5] + fontSizeUnit,
    6: fontSizeValues[6] + fontSizeUnit
  },
  lines: {
    unit: outlineSizeUnit,
    value: outlineSizeValue,
    style: `solid`,
    size: outlineSizeValue + outlineSizeUnit
  },
  inputs: {
    background: '#414147'
  },
  variations: {
    outlineAmount: 1 - 0.5,
    step1: 1 - 0.08,
    step2: 1 - 0.16,
    disabled: 1 - 0.4,
    disabledButton: 1 - 0.7,
  }
}

export default settings

/*
const googleFontName = 'Lato'
const googleFontSizes = '400,700,400italic,700italic'
const googleSubset = 'latin'
const googleProtocol = 'https://'
const googleFontRequest = `${googleFontName}:${googleFontSizes}&subset=${googleSubset}`
*/