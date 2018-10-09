import settings from "./settings";

const {spacesScale, textScale} = settings

const spacesSizeUnit = `rem`
const textSizeUnit = `rem`

export default {
  fontName: settings.fontName,
  textColor: settings.textColor,
  invertedTextColor: settings.invertedTextColor,
  primaryColor: settings.primaryColor,
  primaryBackgroundColor: settings.primaryBackgroundColor,
  secondaryBackgroundColor: settings.secondaryBackgroundColor,
  inputsBackgroundColor: settings.inputsBackgroundColor,
  linesColor: settings.linesColor,
  linesStyle: settings.linesStyle,
  linesSize: settings.linesSize,
  radius: settings.radius,
  spaces: {
    1: 1 / spacesScale + spacesSizeUnit,
    2: 2 / spacesScale + spacesSizeUnit,
    3: 3 / spacesScale + spacesSizeUnit,
    4: 5 / spacesScale + spacesSizeUnit,
    5: 8 / spacesScale + spacesSizeUnit,
    6: 13 / spacesScale + spacesSizeUnit
  },
  textSizes: {
    1: 1 / textScale + textSizeUnit,
    2: 2 / textScale + textSizeUnit,
    3: 3 / textScale + textSizeUnit,
    4: 5 / textScale + textSizeUnit,
    5: 8 / textScale + textSizeUnit,
    6: 13 / textScale + textSizeUnit
  }
}