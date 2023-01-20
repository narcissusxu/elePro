<template>
  <div :style="mainStyle">
    <div class="main-container">
      <div class="main-container-head">
        ElePro<sup>&copy;</sup> <span style="font-size: medium; color: dimgrey; font-weight: lighter">简单浏览图片，视频，或文字</span>
      </div>
      <div class="main-container-content">
        <Row>
          <Col :span="3">
            <div>
              <Menu active-name="READER" :style="{backgroundColor: '#f8f8f9'}" @on-select="handleSelect">
                <MenuGroup v-for="item in menuCon" :key="item.title" :title="item.title">
                  <MenuItem v-for="inner in item.children" :key="inner.name" :name="inner.name">
                    <Icon :type="inner.icon" />
                    {{inner.desc}}
                  </MenuItem>
                </MenuGroup>
              </Menu>
            </div>
          </Col>
          <Col :span="21">
            <div>
              <router-view></router-view>
            </div>
          </Col>
        </Row>
      </div>
      <div class="main-container-foot">
        开源项目 <Link href="">ElePro</Link>. 作者 bafan. Version 1.0-RELEASE
      </div>
    </div>
  </div>
</template>

<script>
import CONFIG_MENU from "@/components/MenuConfig"
export default {
  name: 'HelloWorld',
  data() {
    return {
      mainStyle: {
        height: `${document.documentElement.clientHeight}px`
      },
      menuCon: CONFIG_MENU
    }
  },
  methods: {
    handleSelect(x) {
      this.$router.push(x)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
