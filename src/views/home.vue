<template>
  <div v-show="isShow">
    <div class="index-row">
      <div class="title">
        推荐歌单
        <router-link to="/explore">更多</router-link>
      </div>
    </div>
    <CoverRow />
  </div>
</template>
<script>
import CoverRow from '../components/CoverRow.vue';
export default {
  name: 'Home',
  components: {
    CoverRow,
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
<style lang=""></style>
