<template>
  <div class="widget-second">
    <h3>{{ title }}</h3>
    <div><small>Instance of "widget-second"</small></div>
    <input type="text" v-model="message">
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
  })
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