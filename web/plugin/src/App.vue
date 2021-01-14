<template>
  <div id="nav">
    <div class="test" @click.stop="readDoc">
      读取sketch文档
      <div>{{docDatas}}</div>
    </div>
    <div class="test" @click.stop="writeDoc">
      写入sketch文档
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class App extends Vue {
  docDatas: string = '';

  readDoc() {
      (<any>window).postMessage('readDoc', 'a').then((res:any) => {
        this.docDatas = res;
      })
  }

  writeDoc() {
    (<any>window).postMessage('writeDoc', 1, 2, 3);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .test {
    cursor: pointer;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
