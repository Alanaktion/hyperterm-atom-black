
const backgroundColor = '#1D2026'
const foregroundColor = '#D9E2F2'
const cursorColor = foregroundColor
const borderColor = backgroundColor

const colors = [
  backgroundColor,
  '#FF5966', // red
  '#A0FF5C', // green
  '#FFC15E', // yellow
  '#40AFE3', // blue
  '#E078FF', // pink
  '#63F5FF', // cyan
  '#D6D6D6', // light gray
  '#9C9C9C', // medium gray
  '#FF5966', // red
  '#A0FF5C', // green
  '#FFC15E', // yellow
  '#40AFE3', // blue
  '#E078FF', // pink
  '#63F5FF', // cyan
  '#FFFFFF', // white
  foregroundColor
]

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #21252b !important;
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })
}
