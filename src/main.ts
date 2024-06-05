import App from './index.svelte'
import 'webkit/styles/main.css'
import { startResponsiveController } from 'webkit/responsive'

import Dialogs from 'webkit/ui/Dialog/Dialogs.svelte'

startResponsiveController()

const app = new App({
  target: document.getElementById('app') as Element,
})
const ROOT_CTX = app.$$.context

new Dialogs({ target: document.body, context: ROOT_CTX })

export default app
