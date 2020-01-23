import { dimensions, fonts, colors, breakpoints } from './variables'
import { getEmSize } from './mixins'

export default `
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  h1.nameDisplay {
    position: fixed;
  }


  .centerpiece-text {
    height: 100vh;
    width: 100vw;
    margin: auto auto;
  }

  .social-media-container {
    display: flex;
    flex-direction: row;
  }

`
