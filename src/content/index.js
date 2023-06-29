import './assets/main.css'
import "./assets/tailwind.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


let divId = "vApp"

const div = document.createElement("div")
div.id = divId
document.body.parentNode.insertBefore(div, document.body.nextSibling);
createApp(App).use(router).mount(`#${divId}`)

