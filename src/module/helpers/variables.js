import {shade, tint} from "polished/lib/index";

const variables = {}

//units
variables.spacesSizeUnit = 'rem'
variables.textSizeUnit = 'rem'
variables.linesSizeUnit = 'px'
variables.radiusUnit = 'px'

//scales
variables.textScale = 3
variables.spacesScale = 3

//text
variables.fontName = 'Lato'
variables.textColor = 'black'
variables.invertedTextColor = '#ffffff'
variables.headersColor = variables.textColor
variables.placeholdersColor = tint(1 - 0.6, variables.textColor)

//colors
variables.primaryColor = `#0075db`
variables.primaryColorHover = shade(1 - 0.12, variables.primaryColor)
variables.primaryColorActive = shade(1 - 0.22, variables.primaryColor)
variables.primaryColorDisabled = tint(1 - 0.7, variables.primaryColor)
variables.focusColor = tint(1 - 0.5, variables.primaryColor)

//backgrounds
variables.primaryBackgroundColor = '#fafafa'
variables.secondaryBackgroundColor = '#ffffff'
variables.inputsBackgroundColor = '#ffffff'
variables.inputsBackgroundColorDisabled = shade(1 - 0.04, variables.inputsBackgroundColor)

//lines
variables.linesColor = '#e6e6e6'
variables.linesColorHover = shade(1 - 0.12, variables.linesColor)
variables.linesStyle = 'solid'
variables.linesWidth =  '1'
variables.linesSize = variables.linesWidth + variables.linesSizeUnit
variables.radius = 3 + variables.radiusUnit

//text sizes
variables.textSize1 = 1 / variables.textScale + variables.textSizeUnit
variables.textSize2 = 2 / variables.textScale + variables.textSizeUnit
variables.textSize3 = 3 / variables.textScale + variables.textSizeUnit
variables.textSize4 = 5 / variables.textScale + variables.textSizeUnit
variables.textSize5 = 8 / variables.textScale + variables.textSizeUnit
variables.textSize6 = 13 / variables.textScale + variables.textSizeUnit

//space sizes
variables.spaceSize1 = 1 / variables.spacesScale + variables.spacesSizeUnit
variables.spaceSize2 = 2 / variables.spacesScale + variables.spacesSizeUnit
variables.spaceSize3 = 3 / variables.spacesScale + variables.spacesSizeUnit
variables.spaceSize4 = 5 / variables.spacesScale + variables.spacesSizeUnit
variables.spaceSize5 = 8 / variables.spacesScale + variables.spacesSizeUnit
variables.spaceSize6 = 13 / variables.spacesScale + variables.spacesSizeUnit

/*


//text
variables.fontName = 'Arial'
variables.textColor = 'white'
variables.invertedTextColor = 'black'
variables.headersColor = variables.textColor
variables.placeholdersColor = tint(1 - 0.6, variables.textColor)

//colors
variables.primaryColor = `orange`
variables.primaryColorHover = shade(1 - 0.12, variables.primaryColor)
variables.primaryColorActive = shade(1 - 0.22, variables.primaryColor)
variables.primaryColorDisabled = tint(1 - 0.7, variables.primaryColor)
variables.focusColor = tint(1 - 0.5, variables.primaryColor)

//backgrounds
variables.primaryBackgroundColor = 'black'
variables.secondaryBackgroundColor = '#292929'
variables.inputsBackgroundColor = '#4b4b4b'
variables.inputsBackgroundColorDisabled = shade(1 - 0.04, variables.inputsBackgroundColor)

//lines
variables.linesColor = '#383838'
variables.linesColorHover = shade(1 - 0.12, variables.linesColor)
variables.linesStyle = 'solid'
variables.linesSize = `2` + variables.linesSizeUnit
variables.radius = '5' + variables.radiusUnit

//todo radio and check positioning?

//units
variables.spacesSizeUnit = 'rem'
variables.textSizeUnit = 'rem'
variables.linesSizeUnit = 'px'
variables.radiusUnit = 'px'

//scales
variables.textScale = 2.9
variables.spacesScale = 2.8

//text sizes
variables.textSize1 = 1 / variables.textScale + variables.textSizeUnit
variables.textSize2 = 2 / variables.textScale + variables.textSizeUnit
variables.textSize3 = 3 / variables.textScale + variables.textSizeUnit
variables.textSize4 = 5 / variables.textScale + variables.textSizeUnit
variables.textSize5 = 8 / variables.textScale + variables.textSizeUnit
variables.textSize6 = 13 / variables.textScale + variables.textSizeUnit

//space sizes
variables.spaceSize1 = 1 / variables.spacesScale + variables.spacesSizeUnit
variables.spaceSize2 = 2 / variables.spacesScale + variables.spacesSizeUnit
variables.spaceSize3 = 3 / variables.spacesScale + variables.spacesSizeUnit
variables.spaceSize4 = 5 / variables.spacesScale + variables.spacesSizeUnit
variables.spaceSize5 = 8 / variables.spacesScale + variables.spacesSizeUnit
variables.spaceSize6 = 13 / variables.spacesScale + variables.spacesSizeUnit


*/

export default variables