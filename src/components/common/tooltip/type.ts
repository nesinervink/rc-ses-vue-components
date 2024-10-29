import type { VTooltip } from 'vuetify/components'

import type { FieldProps } from '@/types/inputs/FieldProps'

export type TooltipProps = FieldProps & {
  title?: string
  description?: string
  activator?: VTooltip['$props']['activator']
  activatorProps?: VTooltip['$props']['activatorProps']
  attach?: VTooltip['$props']['attach']
  closeDelay?: VTooltip['$props']['closeDelay']
  closeOnBack?: VTooltip['$props']['closeOnBack']
  closeOnContentClick?: VTooltip['$props']['closeOnContentClick']
  contentClass?: VTooltip['$props']['contentClass']
  contained?: VTooltip['$props']['contained']
  location?: VTooltip['$props']['location']
  contentProps?: VTooltip['$props']['contentProps']
  disabled?: VTooltip['$props']['disabled']
  eager?: VTooltip['$props']['eager']
  height?: VTooltip['$props']['height']
  id?: VTooltip['$props']['id']
  locationStrategy?: VTooltip['$props']['locationStrategy']
  maxHeight?: VTooltip['$props']['maxHeight']
  maxWidth?: VTooltip['$props']['maxWidth']
  minHeight?: VTooltip['$props']['minHeight']
  minWidth?: VTooltip['$props']['minWidth']
  noClickAnimation?: VTooltip['$props']['noClickAnimation']
  offset?: VTooltip['$props']['offset']
  openDelay?: VTooltip['$props']['openDelay']
  openOnClick?: VTooltip['$props']['openOnClick']
  openOnFocus?: VTooltip['$props']['openOnFocus']
  openOnHover?: VTooltip['$props']['openOnHover']
  origin?: VTooltip['$props']['origin']
  scrim?: VTooltip['$props']['scrim']
  scrollStrategy?: VTooltip['$props']['scrollStrategy']
  target?: VTooltip['$props']['target']
  text?: VTooltip['$props']['text']
  transition?: VTooltip['$props']['transition']
  width?: VTooltip['$props']['width']
  zIndex?: VTooltip['$props']['zIndex']
}
