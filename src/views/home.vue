<template>
  <div v-show="isShow">
    <div class="index-row">
      <div class="title">
        推荐歌单
        <router-link to="/explore">更多</router-link>
      </div>
    </div>
    <CoverRow
      :type="'playlist'"
      :items="recommendPlaylist.items"
      sub-text="copywriter"
    />
  </div>
</template>
<script>
import CoverRow from '../components/CoverRow.vue';
import { getRecommendPlayList } from '@/utils/playlist';
export default {
  name: 'Home',
  components: {
    CoverRow,
  },
  data() {
    return {
      isShow: true,
      recommendPlaylist: { items: [] },
    };
  },

  mounted() {
    this.getData();
    // setTimeout(() => {
    //   if (!this.show) NProgress.start();
    // }, 1000);
    // .then(res => {
    //   // this.recommendPlaylist.items = res;
    //   // NProgress.done();
    // });
  },

  methods: {
    async getData() {
      let res = await getRecommendPlayList(10, false);
      console.log(res);
      this.isShow = true;
    },
  },
};
</script>

<style lang="scss">
.index-row {
  margin-top: 54px;
}
.index-row.first-row {
  margin-top: 32px;
}
.playlists {
  display: flex;
  flex-wrap: wrap;
  margin: {
    right: -12px;
    left: -12px;
  }
  .index-playlist {
    margin: 12px 12px 24px 12px;
  }
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);
  a {
    font-size: 13px;
    font-weight: 600;
    opacity: 0.68;
  }
}

footer {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}

.for-you-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 78px;
}
</style>
