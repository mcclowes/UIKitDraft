import settings from "./settings";
import {css} from 'emotion'

const spacing = {}

const range = [0, 1, 2, 3, 4, 5, 6]
range.map((e, i) => {
  const spacingI = i === 0 ? 0 : settings.spaces[i]
  spacing['m' + i] = css({margin: spacingI})
  spacing['mt' + i] = css({marginTop: spacingI})
  spacing['mr' + i] = css({marginRight: spacingI})
  spacing['mb' + i] = css({marginBottom: spacingI})
  spacing['ml' + i] = css({marginLeft: spacingI})
  spacing['mx' + i] = css({marginLeft: spacingI, marginRight: spacingI})
  spacing['my' + i] = css({marginTop: spacingI, marginBottom: spacingI})
  spacing['p' + i] = css({padding: spacingI})
  spacing['pt' + i] = css({paddingTop: spacingI})
  spacing['pr' + i] = css({paddingRight: spacingI})
  spacing['pb' + i] = css({paddingBottom: spacingI})
  spacing['pl' + i] = css({paddingLeft: spacingI})
  spacing['px' + i] = css({paddingLeft: spacingI, paddingRight: spacingI})
  spacing['py' + i] = css({paddingTop: spacingI, paddingBottom: spacingI})
  if (i > 0) {
    const negativeSpacingI = '-' + settings.spaces[i]
    spacing['mn' + i] = css({margin: negativeSpacingI})
    spacing['mtn' + i] = css({marginTop: negativeSpacingI})
    spacing['mrn' + i] = css({marginRight: negativeSpacingI})
    spacing['mbn' + i] = css({marginBottom: negativeSpacingI})
    spacing['mln' + i] = css({marginLeft: negativeSpacingI})
    spacing['mxn' + i] = css({marginLeft: negativeSpacingI, marginRight: negativeSpacingI})
    spacing['myn' + i] = css({marginTop: negativeSpacingI, marginBottom: negativeSpacingI})
    spacing['pn' + i] = css({padding: negativeSpacingI})
    spacing['ptn' + i] = css({paddingTop: negativeSpacingI})
    spacing['prn' + i] = css({paddingRight: negativeSpacingI})
    spacing['pbn' + i] = css({paddingBottom: negativeSpacingI})
    spacing['pln' + i] = css({paddingLeft: negativeSpacingI})
    spacing['pxn' + i] = css({paddingLeft: negativeSpacingI, paddingRight: negativeSpacingI})
    spacing['pyn' + i] = css({paddingTop: negativeSpacingI, paddingBottom: negativeSpacingI})
  }
})

export default spacing