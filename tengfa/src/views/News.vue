<template>
  <div>
    <div class="newsInfo_topBg">
      <div class="newsInfo_top w">
        <ul class="newsInfo_topContainer">
          <li :ref="tab">
            <a>公司新闻</a>
          </li>
          <li :ref="tab"><a>行情导购</a></li>
          <li :ref="tab"><a>常见问题</a></li>
        </ul>
      </div>
    </div>

    <keep-alive>
      <component :is="typeComponentMap[pageParams.type]"></component>
    </keep-alive>
  </div>
</template>

<script setup>
// newsInfo_active
import CompanyNew from "../components/CompanyNews.vue";
import Mark from "../components/MarketGuide.vue";
import Question from "../components/Question.vue";


import { onMounted, reactive } from "vue";

// const TabChange = (e) => {
//   console.log(e);
// };

const pageParams = reactive({
  type: 1,
});

const typeComponentMap = {
  1: CompanyNew,
  2: Mark,
  3:Question
};

let arr = [];
let tab = (e) => {
  // console.log(e);
  arr.push(e);
};

onMounted(() => {
  var x = 0;
  arr[x].classList.add("newsInfo_active");
  arr[x].children[0].style.color = "#5685fe";
  arr.forEach((item, index) => {
    item.onclick = () => {
      pageParams.type = (index + 1);
      arr[x].classList.remove("newsInfo_active");
      arr[x].children[0].style.color = "#000";
      arr[index].classList.add("newsInfo_active");
      arr[index].children[0].style.color = "#5685fe";
      x = index;
    };
  });
});
</script>

<style lang="scss" scoped>
.w {
  width: 1200px;
  margin: 0 auto !important;
}
.newsInfo_topBg {
  width: 100%;
  height: 321px;
  padding-top: 70px;
  background: url(https://www.tf2sc.cn/static/img/bg-1.png) no-repeat center
    center;
  background-size: cover;
}

.newsInfo_topContainer {
  float: left;
  margin-top: 45px;
  width: 1200px;
  height: 60px;
  background: #f2f4fb;
  border-radius: 8px 8px 0px 0px;
  /* border: 1px solid red; */
}
.newsInfo_top ul .newsInfo_active {
  font-weight: 600;
  color: #5685fe;
  background-color: #fff;
}
.newsInfo_top ul li {
  float: left;
  width: 132px;
  height: 60px;
  background: #f2f4fb;
  font-size: 18px;
  font-weight: 400;
  color: #222222;
  line-height: 60px;
  text-align: center;
  /* border: 1px solid orange; */
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;
}

</style>