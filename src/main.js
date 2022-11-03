import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { Amplify } from 'aws-amplify';
import router from "./router/index.js";

Amplify.configure({
    API: {
        endpoints: [
            {
                name: "cuttingLambda",
                endpoint: " https://tjs6ls41s4.execute-api.eu-central-1.amazonaws.com/dev",
            },
            {
                name: "cuttingOptimizer",
                endpoint: "http://cuttingoptimizer-env.eba-phg9s8gd.eu-central-1.elasticbeanstalk.com",
            }
        ]
    }
});

// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
