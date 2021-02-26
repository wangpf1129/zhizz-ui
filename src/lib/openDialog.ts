import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

const openDialog = (options) => {
  const {title, content, closeOnClickOverlay,ok, cancel} = options;
  const destroy = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(Dialog,
              {
                visible: true,
                'onUpdate:visible': (newVisible) => {if (!newVisible) {destroy();}},
                ok,
                cancel,
                closeOnClickOverlay
              },
              {title: () => title, content: () => content});
    }
  });
  app.mount(div);

};


export {openDialog};