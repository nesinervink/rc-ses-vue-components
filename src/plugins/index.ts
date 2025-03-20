import I18NextVue from 'i18next-vue'
import type { App } from 'vue'

import i18next from './i18n'
import vuetify from './vuetify'

export default function registerPlugins(app: App) {
  app.use(I18NextVue, i18next()).use(vuetify())
}
