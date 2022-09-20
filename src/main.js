import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const components = import.meta.glob('./components/*.vue', {eager: true})

Object.entries(components).forEach(([path, definition]) => {
    const componentName = path.split('/').pop().replace(/\.\w+$/, '')
    console.log(componentName)
    app.component(componentName, definition.default)
})

app.mount('#app')