import Message from "../component/Message/index.vue";
import {defineClientConfig} from 'vuepress/client';
import {NButton, NSpace, NTag} from "naive-ui";

export default defineClientConfig({
    enhance({app, router, siteData}) {
        app.component('Message', Message)
        app.component('NButton', NButton)
        app.component('NSpace', NSpace)
        app.component('NTag', NTag)
    },
})