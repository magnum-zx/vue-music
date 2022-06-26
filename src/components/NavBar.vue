<template>
  <div>
    <!-- hello -->
    <!-- <Win32Titlebar></Win32Titlebar> -->
    <nav>
      <div class="navigation-button">
        <button-icon @click.native="go('back')"
          ><svg-icon icon-class="arrow-left"
        /></button-icon>
        <button-icon @click.native="go('forward')"
          ><svg-icon icon-class="arrow-right"
        /></button-icon>
      </div>
      <div class="navigation-links">
        <router-link to="/" :class="{ active: $route.name === 'home' }">
          Home
        </router-link>
        <router-link
          to="/explore"
          :class="{ active: $route.name === 'explore' }"
          >explore</router-link
        >
        <router-link
          to="/library"
          :class="{ active: $route.name === 'library' }"
          >library</router-link
        >
      </div>

      <div class="navigation-right">
        <div class="search-box">
          <div class="container" :class="{ active: inputFocus }">
            <svg-icon icon-class="search" />
            <div class="input">
              <input
                ref="searchInput"
                v-model="keywords"
                type="search"
                :placeholder="inputFocus ? '' : 'Search'"
                @keydown.enter="handleSearch"
                @focus="inputFocus = true"
                @blur="inputFocus = false"
              />
            </div>
          </div>
        </div>
        <img
          class="avatar"
          :src="avatarUrl"
          loading="lazy"
          @click="showUserProfileMenu"
        />
      </div>
    </nav>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-unused-components */
import 'vscode-codicons/dist/codicon.css';
import ContextMenu from '@/components/ContextMenu.vue';
import ButtonIcon from '@/components/ButtonIcon.vue';

export default {
  name: 'NavBar',
  components: {
    ContextMenu,
    ButtonIcon,
  },
  data() {
    return { inputFocus: false };
  },
  computed: {
    avatarUrl() {
      return 'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=60y60';
    },
  },
  methods: {
    go(where) {
      if (where === 'back') this.$router.go(-1);
      else this.$router.go(1);
    },
    showUserProfileMenu() {},
    handleSearch() {},
  },
};
</script>
<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: {
    right: 10vw;
    left: 10vw;
  }
  // 毛玻璃效果
  backdrop-filter: saturate(180%) blur(20px);
  background-color: var(--color-navbar-bg);
  z-index: 100;

  //electron style : make window draggable
  /* -webkit-app-region: drag; */
}
.navigation-button {
  flex: 1;
  display: flex;
  align-items: center;
  .svg-icon {
    height: 24px;
    width: 24px;
  }
}

.navigation-links {
  flex: 1;
  display: flex;
  justify-content: center;
  text-transform: capitalize; //文本中的每个单词以大写字母开头
  user-select: none; // 禁止用户选中文字
  a {
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 6px;
    padding: 6px 10px;
    color: var(--color-text);
    transition: 0.2s;
    margin: {
      right: 12px;
      left: 12px;
    }
    &:hover {
      background: var(--color-secondary-bg-for-transparent);
    }
    &:active {
      transform: scale(0.92);
      transition: 0.2s;
    }
  }
  a.active {
    color: var(--color-primary);
  }
}

/* .search {
  .svg-icon {
    height: 18px;
    width: 18px;
  }
} */

.search-box {
  display: flex;
  justify-content: flex-end;
  .container {
    display: flex;
    align-items: center;
    height: 32px;
    background: var(--color-secondary-bg-for-transparent);
    border-radius: 8px;
    width: 200px;

    input {
      font-size: 16px;
      border: none;
      background: transparent;
      width: 96%;
      font-weight: 600;
      margin-top: -1px;
      color: var(--color-text);
    }
    &.active {
      background: var(--color-primary-bg-for-transparent);
      input,
      .svg-icon {
        opacity: 1;
        color: var(--color-primary);
      }
    }
  }

  .svg-icon {
    height: 15px;
    width: 15px;
    color: var(--color-text);
    opacity: 0.28;
    margin: {
      left: 8px;
      right: 4px;
    }
  }
}
[data-theme='dark'] {
  .search-box {
    .active {
      input,
      .svg-icon {
        color: var(--color-text);
      }
    }
  }
}
.navigation-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .avatar {
    user-select: none;
    height: 30px;
    margin-left: 12px;
    vertical-align: -7px;
    border-radius: 50%;
    cursor: pointer;
    /* -webkit-app-region: no-drag; */
    /* -webkit-user-drag: none; */
    &:hover {
      filter: brightness(80%);
    }
  }
  .search-button {
    display: none;
    /* -webkit-app-region: no-drag; */
  }
}
</style>
