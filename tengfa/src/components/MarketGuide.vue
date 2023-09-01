<template>
  <div class="newsInfo_tabContainer">
    <div class="newsInfo_tabContainerBox w">
      <a class="news_item" v-for="(item, index) in List.arrlist" :key="index">
        <img :src="item.cover" />
        <div class="news_info">
          <div class="info_title">{{ item.title }}</div>
          <div class="info_des">
            {{ item.simple }}
          </div>
          <div class="info_num">
            <span>{{ item.utime.split("T")[0] }}  00:00</span>
            <!--                    <span>阅读量  0</span>-->
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { Mark } from "../api/index";
import { reactive } from "vue";

const List = reactive({
  arrlist: [],
});

const getList = async () => {
  let obj = await Mark();
//   console.log(obj.data.data
  List.arrlist = obj.data.data;
};
getList();
</script>

<style lang="scss" scoped>
.w {
  margin: 0 auto;
}
.newsInfo_tabContainer {
  margin-top: -216px;
}
.newsInfo_tabContainerBox {
  margin-top: -216px;
  margin-bottom: 70px;
  width: 1200px;
  min-height: 847px;
  padding-bottom: 30px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(74, 101, 172, 0.18);
  border-radius: 0px 0px 8px 8px;
  /* border: 1px solid red; */
}
.news_item {
  display: flex;
  margin: 0 30px;
  padding: 30px 0;
  /* align-items: center; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
a {
  color: #333333;
  text-decoration: none;
}
.news_item > img {
  width: 292px;
  height: 219px;
  border-radius: 8px;
}
.news_info {
  margin-top: 20px;
  margin-left: 30px;
}
.info_title {
  color: rgba(0, 0, 0, 0.85);
  line-height: 24px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info_des {
  color: rgba(0, 0, 0, 0.65);
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info_num {
  color: #999999;
  font-size: 14px;
  margin-top: 92px;
}
</style>