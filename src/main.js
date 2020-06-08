import Vue from 'vue';
import Vuelidate from 'vuelidate';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuelidate);

Vue.config.productionTip = false;


Vue.mixin({
    methods: {
        lighten(color, percent) {
            var num = parseInt(color.replace("#",""), 16),
                amt = Math.round(2.55 * percent),
                R = (num >> 16) + amt,
                B = (num >> 8 & 0x00FF) + amt,
                G = (num & 0x0000FF) + amt;

            return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
        },
        alpha(alpha){
            let x = alpha * 255;
            let y = Math.floor(x);
            let s = y.toString(16);
            return y < 16 ? '0' + s : s;
        }

    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
