import DefaultTheme from 'vitepress/theme'
import Demo from '../components/Demo.vue'
import DemoWrapper from '../components/DemoWrapper.vue'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import 'vue-dlib/vue-dlib.min.css'
import './custom.css'
import type { Theme } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('Demo', Demo)
    app.component('DemoWrapper', DemoWrapper)
  },
} as Theme
