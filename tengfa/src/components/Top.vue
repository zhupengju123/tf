<template>
  <div>
    <div class="navigate">
      <div class="navigate-div">
        <div class="navigate-left">
          <a class="left-img1"
            ><img
              src="https://www.tf2sc.cn/static/img/%E8%85%BE%E5%8F%91.png"
              alt="腾发首页logo"
              :style="{ width: '100%', height: '100%' }"
          /></a>
          <img
            src="https://www.tf2sc.cn/static/img/%E5%AE%9A%E4%BD%8D.png"
            alt="定位图标"
            class="left-img2"
          />
          <div id="index-address" class="left-address" city-code="0">全国</div>
        </div>
        <div class="navigate-right">
          <router-link to="/">首页</router-link>
          <router-link to="/twocar">二手车</router-link>
          <router-link to="/newcar">新车</router-link>
          <router-link to="/sellcar">卖车</router-link>
          <router-link to="/finance">腾发金融</router-link>
          <router-link to="/serve">腾发服务</router-link>
          <div class="right-phone">
            咨询电话<span class="phone-num" id="top-phone-num"
              >400-0606-777</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="index-right">
      <div class="index-right-div">
        <div
          @mouseenter="Show($event.target)"
          @mouseleave="No($event.target)"
          class="right-item"
          id="go-app"
        >
          <div class="item-container">
            <div class="item-container-bg"></div>
            <div>APP</div>
          </div>
          <div id="item-abs-app" class="item-hover item-abs-code">
            <img
              src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734977.jpg"
              id="abs-app-code"
            />
            <div>
              下载app<br />
              关注更多信息
            </div>
          </div>
        </div>
        <div
          @mouseenter="Show($event.target)"
          @mouseleave="No($event.target)"
          class="right-item"
          id="go-wx"
        >
          <div class="item-container">
            <div class="item-container-bg"></div>
            <div>小程序</div>
          </div>
          <div id="item-abs-wx" class="item-hover item-abs-code">
            <img
              src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734976.jpg"
              id="abs-wx-code"
            />
            <div>
              扫码打开小程序<br />
              关注更多信息
            </div>
          </div>
        </div>
        <div
          @mouseenter="Show($event.target)"
          @mouseleave="No($event.target)"
          class="right-item"
          id="go-tell"
        >
          <div class="item-container">
            <div class="item-container-bg"></div>
            <div>电话</div>
          </div>
          <div id="item-abs-tel" class="item-hover">400-0606-777</div>
        </div>
        <div class="right-item" id="go-top">
          <div @click="Top" class="item-container">
            <div class="item-container-bg"></div>
            <div>回到顶部</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, toRefs } from "vue";

const Top = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Show = (el) => {
  // console.log(el.children[1]);
  el.children[1].style.display = "block";
};
const No = (el) => {
  // console.log(el.children[1]);
  el.children[1].style.display = "none";
};
</script>

<style lang="scss" scoped>
a {
  color: #333333;
  text-decoration: none;
}

.navigate {
  position: fixed;
  top: 0;
  background-color: #ffffff;
  color: #333333;
  width: 100%;
  height: 70px;
  z-index: 9;
}
.navigate-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  .navigate-right {
    display: flex;
    font-size: 16px;
    .right-phone {
      padding: 12px 0;
      .phone-num {
        color: #5685fe;
        margin-left: 4px;
      }
    }
    a {
      margin-right: 50px;
      padding: 12px 0;
    }
  }
  .navigate-left {
    display: flex;
    align-items: center;
    font-size: 14px;
    .left-img1 {
      width: 130px;
      height: 42px;
      margin-right: 21px;
    }
    .left-img2 {
      width: 14px;
      height: 14px;
      margin-right: 5px;
    }
    .left-address {
      cursor: pointer;
    }
  }
}
.index-right {
  width: 66px;
  background-color: #ffffff;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  font-size: 12px;
}
.index-right-div {
  width: 100%;
}
.right-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin-bottom: 31px;
  cursor: pointer;
}
.item-container {
  text-align: center;
}
.item-container:hover {
  color: #5685fe;
}
#go-app .item-container-bg {
  background-image: url(https://www.tf2sc.cn/static/img/yingyong.png);
}
#go-app .item-container-bg:hover {
  background-image: url(https://www.tf2sc.cn/static/img/yingyong1.png);
}

.item-container-bg {
  background-size: 24px 24px;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
  display: inline-block;
}
.item-abs-code {
  width: 140px;
  height: 194px;
  top: -88px;
  box-sizing: border-box;
  padding: 10px;
}
.item-hover {
  position: absolute;
  z-index: 1;
  right: 66px;
  box-shadow: 0px 2px 20px 0px rgba(170, 170, 216, 0.4);
  background: #ffffff;
  text-align: center;
  display: none;
  font-size: 12px;
  border-radius: 8px;
}
#go-wx .item-container-bg {
  background-image: url(https://www.tf2sc.cn/static/img/xiaochengxu.png);
}
#go-tell .item-container-bg {
  background-image: url(https://www.tf2sc.cn/static/img/dianhua.png);
}
#go-top .item-container-bg {
  background-image: url(https://www.tf2sc.cn/static/img/dingbu.png);
}
#go-wx .item-container-bg:hover {
  background-image: url(https://www.tf2sc.cn/static/img/xiaochengxu1.png);
}
#go-tell .item-container-bg:hover {
  background-image: url(https://www.tf2sc.cn/static/img/dianhua1.png);
}
#go-top .item-container-bg:hover {
  background-image: url(https://www.tf2sc.cn/static/img/dingbu1.png);
}
#item-abs-tel {
    width: 140px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    color: #5685FE;
}
</style>