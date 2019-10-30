import Vue from 'vue';
import DocumentRegisterElement from 'document-register-element/build/document-register-element';
import vueCustomElement from 'vue-custom-element';

Vue.use(vueCustomElement);

Vue.customElement(
  'widget-first',
  () => {
    return new Promise(r => {
      import(/* webpackChunkName: 'first' */ './WidgetFirst')
        .then(l => r(l.default));
    });
  },
  { props: ['prop'], shadow: true }
);

Vue.customElement(
  'widget-second',
  () => {
    return new Promise(r => {
      import(/* webpackChunkName: 'second' */ './WidgetSecond')
        .then(l => r(l.default));
    });
  },
  { props: ['prop'], shadow: true }
);

// Default component example
// import MyWidget from './MyWidget';
// Vue.customElement('widget-name', MyWidget, { shadow: true });
