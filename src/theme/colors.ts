const primary = {
  'primary-50': '#ecf9fe',
  'primary-100': '#dcf4fc',
  'primary-200': '#b9e9fa',
  'primary-300': '#88daf7',
  'primary-400': '#50c9f3',
  'primary-500': '#06a0d4',
  'primary-600': '#087fb2',
  'primary-700': '#0e6790',
  'primary-800': '#155575',
  'primary-900': '#164763',
  'primary-950': '#082d44',
  primary: '#06a0d4',
}

const secondary = {
  'secondary-50': '#ecfdf6',
  'secondary-100': '#d1fae7',
  'secondary-200': '#a5f3d3',
  'secondary-300': '#6fe7bd',
  'secondary-400': '#05d091',
  'secondary-500': '#00c288',
  'secondary-600': '#00a879',
  'secondary-700': '#008561',
  'secondary-800': '#00664e',
  'secondary-900': '#004e3d',
  'secondary-950': '#002c24',
  secondary: '#00c288',
}

const success = {
  'success-50': secondary['secondary-50'],
  'success-100': secondary['secondary-100'],
  'success-200': secondary['secondary-200'],
  'success-300': secondary['secondary-300'],
  'success-400': secondary['secondary-400'],
  'success-500': secondary['secondary-500'],
  'success-600': secondary['secondary-600'],
  'success-700': secondary['secondary-700'],
  'success-800': secondary['secondary-800'],
  'success-900': secondary['secondary-900'],
  'success-950': secondary['secondary-950'],
  success: secondary.secondary,
}

const grey = {
  'grey-50': '#f9fafb',
  'grey-100': '#f0f2f5',
  'grey-200': '#dce0e5',
  'grey-300': '#c5cad1',
  'grey-400': '#a9afb8',
  'grey-500': '#8e959e',
  'grey-600': '#6b747f',
  'grey-700': '#4a5361',
  'grey-800': '#29323d',
  'grey-900': '#1f2733',
  'grey-950': '#10161f',
  grey: '#6b747f',
}

const info = {
  'info-50': grey['grey-50'],
  'info-100': grey['grey-100'],
  'info-200': grey['grey-200'],
  'info-300': grey['grey-300'],
  'info-400': grey['grey-400'],
  'info-500': grey['grey-500'],
  'info-600': grey['grey-600'],
  'info-700': grey['grey-700'],
  'info-800': grey['grey-800'],
  'info-900': grey['grey-900'],
  'info-950': grey['grey-950'],
  success: grey.grey,
}

const warning = {
  'warning-50': '#fef9ef',
  'warning-100': '#fdefcf',
  'warning-200': '#fce09f',
  'warning-300': '#fbd170',
  'warning-400': '#fac240',
  'warning-500': '#f9b311',
  'warning-600': '#c78f0d',
  'warning-700': '#956b0a',
  'warning-800': '#634706',
  'warning-900': '#4a3504',
  'warning-950': '#312303',
  warning: '#f9b311',
}

const error = {
  'error-50': '#fef4f2',
  'error-100': '#fededa',
  'error-200': '#fdbdb5',
  'error-300': '#fc9c90',
  'error-400': '#fb7b6b',
  'error-500': '#fa5a46',
  'error-600': '#c84838',
  'error-700': '#96362a',
  'error-800': '#63231b',
  'error-900': '#4a1a14',
  'error-950': '#31110d',
  error: '#c84838',
}

export const MergedColors = {
  ...primary,
  ...secondary,
  ...grey,
  ...warning,
  ...error,
  ...success,
  ...info,
}

export const Colors = { primary, secondary, grey, warning, error, success, info }
export default { primary, secondary, grey, warning, error, success, info }
