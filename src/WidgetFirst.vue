<template>
  <div class="widget-first">
    <h3>{{ title }}</h3>
    <div><small>Instance of "widget-first"</small></div>
    <input type="text" v-model="message" />
    <div>
      <sub>{{ message || 'Empty field...' }}</sub>
    </div>
  </div>
</template>

<script>
export default {
  name: 'widget-first',
  props: ['title'],
  data: () => ({
    message: '',
  }),
  async mounted() {
    let timeout = (msg, ms) => {
      return new Promise(resolve => {
        setTimeout(() => resolve(msg), ms);
      });
    };

    // Promises test
    timeout('Promise complete!', 1500)
      .then(data => console.log(`msg: ${data}`))
      .catch(err => console.log(`msg: Promise error`));

    // Async/Await test
    try {
      let data = await timeout('Async/Await complete', 2000);
      console.log(`msg: ${data}`);
    } catch (err) {
      console.log('Async/Await error', err);
    }
  }
};
</script>

<style lang="scss" scoped>
.widget-first {
  margin-bottom: 25px;
}
h3 {
  margin-bottom: 0;
}
</style>
