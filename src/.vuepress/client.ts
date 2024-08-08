import Badges from "../component/Badges/index.vue";
import Message from "../component/Message/index.vue";
import EventTimeLine from "../component/EventTimeLine/index.vue";
import {defineClientConfig} from 'vuepress/client';
import {NButton, NSpace, NTag, NTimeline, NTimelineItem} from "naive-ui";

export default defineClientConfig({
    enhance({app, router, siteData}) {
        app.component('Message', Message)
        app.component('Badges', Badges)
        app.component('EventTimeLine', EventTimeLine)
        app.component('NButton', NButton)
        app.component('NSpace', NSpace)
        app.component('NTag', NTag)
        app.component('NTimeline', NTimeline)
        app.component('NTimelineItem', NTimelineItem)
    },
})