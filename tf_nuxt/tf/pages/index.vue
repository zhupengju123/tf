<template>
  <div>
    <div class="index-body">
      <div class="body-bg"></div>
      <div class="body-search">
        <div class="search">
          <img
            src="https://www.tf2sc.cn/static/img/%E5%8D%96%E8%BD%A6%E7%9A%84%E5%A5%BD%E5%A4%84.png"
            alt="首页顶部车图"
            class="body-car-img"
          />
          <div class="search-gd">腾发二手车</div>
          <div class="search-sr">
            <input
              type="text"
              placeholder="搜索品牌、车型"
              class="search-input"
              id="search-in"
            />
            <button type="button" class="search-btn" id="search-btn">
              搜索
            </button>
          </div>
          <div class="buy-sell">
            <div class="buy">
              <div class="buy-title">
                <div class="search-line"></div>
                <div class="title-text">我要买车</div>
              </div>
              <div class="buy-search">
                <div class="search-div">
                  <a
                    class="div-brand"
                    v-for="item in Index.CustList"
                    :key="item.id"
                    @click="goTwo(item.id)"
                  >
                    <img :src="item.logo" />
                    <span>{{ item.label }}</span>
                  </a>
                </div>
                <div class="search-div">
                  <a class="div-price" href="/c0/ershouche/default/d10"
                    >20万以下</a
                  >
                  <a class="div-price" href="/c0/ershouche/default/d11"
                    >20-30万</a
                  >
                  <a class="div-price" href="/c0/ershouche/default/d12"
                    >30-50万</a
                  >
                  <a class="div-price" href="/c0/ershouche/default/d13"
                    >50万以上</a
                  >
                </div>
                <div class="search-div">
                  <a class="div-price" href="/c0/ershouche/default/a14"
                    >两厢轿车</a
                  >
                  <a class="div-price" href="/c0/ershouche/default/a15">跑车</a>
                  <a class="div-price" href="/c0/ershouche/default/a16">SUV</a>
                  <a class="div-price" href="/c0/ershouche/default/a17">MPV</a>
                </div>
              </div>
            </div>
            <div class="sell">
              <div class="buy-title">
                <div class="search-line"></div>
                <div class="title-text">我要卖车</div>
              </div>
              <div class="sell-container">
                <div class="container-left">
                  <div class="container-input">
                    <input
                      type="number"
                      placeholder="请输入手机号"
                      id="container-gz-in"
                      maxlength="11"
                    />
                    <button type="button" id="container-gz-btn">
                      立即估值
                    </button>
                  </div>
                  <div class="container-gz">
                    <a href="/c0/sell.html" class="gz-link">
                      <img
                        src="https://www.tf2sc.cn/static/img/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1.png"
                      />
                      <span>全国代购</span>
                    </a>
                    <div class="gz-line"></div>
                    <a href="/c0/sell1.html" class="gz-link">
                      <img
                        src="https://www.tf2sc.cn/static/img/%E5%88%B0%E5%BA%97%E4%BC%B0%E5%80%BC.png"
                      />
                      <span>到店估值</span>
                    </a>
                  </div>
                </div>
                <div class="container-right">
                  <img
                    src="https://www.tf2sc.cn/static/img/%E6%88%91%E8%A6%81%E5%8D%96%E8%BD%A6.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="body-car">
        <div class="car-list">
          <div class="list-title">
            <div class="list-left">
              <div class="search-line"></div>
              <div class="title-text">二手车</div>
            </div>
            <a class="list-left" @click="goTwo()">
              <span>查看更多</span>
              <img
                src="https://www.tf2sc.cn/static/img/icon_%E6%9B%B4%E5%A4%9A.png"
              />
            </a>
          </div>
          <div class="list">
            <template v-for="(item, index) in Index.IndexArr">
              <a
                @mouseenter="Change($event.target)"
                @mouseleave="Leave($event.target)"
                :key="index"
                :target="'_blank'"
                :class="'list-item'"
                v-if="index < 12"
                @click="goDal(item.ind)"
              >
                <div class="list-item-img">
                  <img
                    :src="item.cover"
                    :style="{ width: '100%', height: '100%' }"
                  />
                  <div
                    class="item-type type-or"
                    v-if="item.reportAssess == true"
                  >
                    腾发自营
                  </div>
                  <div class="item-type type-re" v-else>限时特惠</div>
                </div>
                <div class="item-info">
                  <div class="item-info-title">
                    {{ item.carName }}
                  </div>
                  <div class="item-info-time">
                    {{ new Date(item.dateOfRegistration).getFullYear() }}年{{
                      new Date(item.dateOfRegistration).getMonth() + 1
                    }}月 / {{ item.mileage }}万公里
                  </div>
                  <div class="item-info-price">
                    <span class="price1">{{ item.currentPrice }}万</span>
                  </div>
                </div>
              </a>
            </template>
          </div>
          <div class="list-title">
            <div class="list-left">
              <div class="search-line"></div>
              <div class="title-text">新车</div>
            </div>
            <a class="list-left" @click="goNew">
              <span>查看更多</span>
              <img
                src="https://www.tf2sc.cn/static/img/icon_%E6%9B%B4%E5%A4%9A.png"
              />
            </a>
          </div>
          <div class="list">
            <a
              :class="'new-item'"
              v-for="(item, index) in Index.NewArr"
              :key="index"
              @mouseenter="ChangeNew($event.target)"
              @mouseleave="LeaveNew($event.target)"
            >
              <div class="new-item-info">
                <div class="new-item-title">
                  {{ item.carBrandMarker }}
                </div>
                <div class="new-price1">{{ item.currentPrice }}万</div>
              </div>
              <div class="new-item-info">
                <div class="item-info1">
                  <div class="new-info-sign">{{ item.tags }}</div>
                  <div class="new-info-color">{{ item.colorLabel }}</div>
                </div>

                <div class="item-info2">指导价：-万 优惠-元</div>
              </div>
            </a>
          </div>
          <div class="list-title">
            <div class="list-left">
              <div class="search-line"></div>
              <div class="title-text">新闻资讯</div>
            </div>
            <a class="list-left" @click="goNews">
              <span>查看更多</span>
              <img
                src="https://www.tf2sc.cn/static/img/icon_%E6%9B%B4%E5%A4%9A.png"
              />
            </a>
          </div>
          <div class="list">
            <template v-for="(item, index) in Index.NewsArr">
              <a
                :key="index"
                v-if="index < 2"
                class="news-item"
                @mouseenter="Change($event.target)"
                @mouseleave="Leave($event.target)"
              >
                <img :src="item.cover" alt="新闻首图" class="news-img" />
                <div class="news-item-info">
                  <div class="news-item-title news-title1">
                    {{ item.title }}
                  </div>
                  <div class="news-item-title news-title2">
                    {{ item.simple }}
                  </div>
                  <div class="news-num">
                    <!--                        <div>阅读量：0</div>-->
                    <div>{{ item.utime.split("T")[0] }}</div>
                  </div>
                </div>
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Cust, list, newList, indexNews } from "../axios";
const router = useRouter();

const Index = reactive({
  IndexArr: [],
  NewArr: [],
  NewsArr: [],
  CustList: [],
  CustPrice: [],
  CustX: [],
});

//获取推荐列表
const getCust = async () => {
  let data = await Cust().data;
  console.log(data);
  Index.CustList = data.convenientBrands;
  Index.CustPrice = data.convenientPrices;
  Index.CustX = data.convenientModels;
};
getCust();

//二手车列表
const IndexList = async () => {
  let obj = await list().data;
  Index.IndexArr = obj.content;
};
IndexList();

//新车
const NewList = async () => {
  let obj = await newList().data;
  Index.NewArr = obj.content;
};
NewList();

// //新闻
// const News = async () => {
//   let obj = await indexNews().data;
//   Index.NewsArr = obj;
// };
// News();

const ChangeNew = (el) => {
  el.style.boxShadow = "0px 5px 5px  gray";
  el.children[0].children[0].style.color = "rgb(86 133 254)";
};
const LeaveNew = (el) => {
  el.style.boxShadow = null;
  el.children[0].children[0].style.color = null;
};

const Change = (el) => {
  // console.log(el);
  el.style.boxShadow = "0px 5px 5px  gray";
  el.children[1].children[0].style.color = "rgb(86 133 254)";
  //  86 133 254    86,133,254
};
const Leave = (el) => {
  el.style.boxShadow = null;
  el.children[1].children[0].style.color = "#333";
};

const goNew = () => {};
const goTwo = () => {
  router.push({
    path: "Two",
  });
};
const goNews = () => {};

//跳转详情页
const goDal = (id) => {};
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
}
.type-re {
  background: linear-gradient(90deg, #ff1766 0%, #ff2a23 100%);
}
::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: #bebebe;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.search-gd {
  margin-bottom: 20px;
  font-family: pmzd;
  line-height: 50px;
  font-size: 40px;
  /* color: #F5CC4F; */
  background-image: -webkit-linear-gradient(top, #f9edd5, #f5cb4f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
a {
  color: #333333;
  text-decoration: none;
}
.index-body {
  margin-top: 70px;
  width: 100%;
  position: relative;
}
.body-bg {
  width: 100%;
  height: 300px;
  background: url(https://www.tf2sc.cn/static/img/%E8%93%9D%E8%89%B2%E8%83%8C%E6%99%AF.png)
    no-repeat;
  background-position: 50%;
}
.body-search {
  position: absolute;
  z-index: 1;
  top: 73px;
  width: 100%;
  .search {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .buy-sell {
      width: 1200px;
      height: 301px;
      background: #ffffff;
      box-shadow: 0px 2px 20px 0px rgba(170, 170, 216, 0.4);
      border-radius: 14px;
      box-sizing: border-box;
      padding-top: 50px;
      display: flex;
      justify-content: space-between;
      .sell {
        width: 586px;
        height: auto;
        .buy-title {
          display: flex;
          align-items: center;
          .search-line {
            width: 10px;
            height: 30px;
            background: #5685fe;
          }
          .title-text {
            line-height: 32px;
            font-weight: 600;
            font-size: 24px;
            margin-left: 20px;
          }
        }
        .sell-container {
          margin-left: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .container-gz {
            width: 330px;
            height: 56px;
            background: #ffffff;
            box-shadow: 0px 1px 10px 0px rgba(170, 170, 216, 0.4);
            border-radius: 7px;
            display: flex;
            align-items: center;
            .gz-line {
              width: 1px;
              height: 29px;
              background: #d8e3ff;
            }
            .gz-link {
              display: flex;
              align-items: center;
              width: 164px;
              justify-content: center;
              img {
                width: 20px;
                height: 20px;
                margin-right: 4px;
              }
            }
          }
          .container-input {
            width: 330px;
            height: 40px;
            box-sizing: border-box;
            padding-left: 20px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 40px;
            .container-input input {
              height: 100%;
              width: 200px;
              border: none;
            }
            .container-input button {
              width: 96px;
              height: 40px;
              background: #5685fe;
              border-radius: 0px 8px 8px 0px;
              border: 1px solid #f0f0f0;
              color: #ffffff;
            }
          }
        }
      }
      .buy-title {
        display: flex;
        align-items: center;
        .search-line {
          width: 10px;
          height: 30px;
          background: #5685fe;
        }
        .title-text {
          line-height: 32px;
          font-weight: 600;
          font-size: 24px;
          margin-left: 20px;
        }
      }
      .buy-search {
        margin-left: 40px;
        font-size: 14px;
        margin-top: 30px;
        .search-div {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          .div-brand {
            display: flex;
            align-items: center;
            margin-right: 30px;
          }
          .div-brand img {
            width: 29px;
            height: 30px;
            margin-right: 12px;
          }
          .div-price {
            width: 90px;
            height: 34px;
            background: #f5f7fe;
            border-radius: 17px;
            line-height: 34px;
            text-align: center;
            margin-right: 15px;
          }
        }
      }
    }
    .body-car-img {
      position: absolute;
      top: -24px;
      right: -28px;
      width: 420px;
      height: 229px;
      z-index: 3;
    }
    .search-sr {
      width: 640px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
      border-radius: 8px;
      margin-bottom: 50px;
      .search-input {
        margin-left: 20px;
        width: 490px;
        height: 100%;
        border: none;
        font-size: 18px;
        outline: none;
      }
      .search-btn {
        width: 116px;
        height: 100%;
        background: #5685fe;
        border-radius: 0px 8px 8px 0px;
        border: 1px solid #f0f0f0;
        font-size: 18px;
        color: #ffffff;
        cursor: pointer;
      }
      input {
        border: none;
        outline: none;
        -webkit-user-select: text !important;
      }
    }
  }
}
.container-input input {
  height: 100%;
  width: 200px;
  border: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input {
  border: none;
  outline: none;
  -webkit-user-select: text !important;
}
.container-input button {
  width: 96px;
  height: 40px;
  background: #5685fe;
  border-radius: 0px 8px 8px 0px;
  border: 1px solid #f0f0f0;
  color: #ffffff;
}
.body-car {
  padding-top: 320px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background: #f9f9f9;
}
.car-list {
  width: 1200px;
  margin: 0 auto;
}
.list-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-left {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666666;
}
.search-line {
  width: 10px;
  height: 30px;
  background: #5685fe;
}
.title-text {
  line-height: 32px;
  font-weight: 600;
  font-size: 24px;
  margin-left: 20px;
}
.list-left {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666666;
}
.list {
  padding: 30px 0 70px 0;
  display: flex;
  flex-wrap: wrap;
}
.list-item {
  display: block;
  width: 277px;
  height: 358px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f5f7fe;
  box-sizing: border-box;
  margin-right: 20px;
  margin-bottom: 30px;
  position: relative;
}
.list-item-img {
  width: 275px;
  height: 208px;
  position: relative;
}
.list-item-img img {
  border-radius: 8px 8px 0px 0px;
}
.type-or {
  background: linear-gradient(90deg, #ff8856 0%, #ff4725 100%);
}
.item-type {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 12px;
  width: 64px;
  height: 20px;
  border-radius: 0px 4px 4px 0px;
}
.item-info {
  margin-top: 20px;
  margin-left: 10px;
  font-size: 18px;
}
.item-info-title {
  width: 257px;
  line-height: 26px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 10px;
}
.item-info-time {
  font-size: 14px;
  color: #999999;
  line-height: 20px;
  margin-bottom: 20px;
}
.item-info-price {
  display: flex;
  align-items: center;
  color: #e73424;
  font-size: 12px;
}
.price1 {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-right: 10px;
}
.new-item:nth-child(2n-1) {
  margin-right: 30px;
}
.new-item {
  width: 584px;
  height: 106px;
  font-size: 12px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f5f7fe;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 30px;
}
.new-item-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.new-item-title {
  width: 349px;
  line-height: 26px;
  font-size: 18px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #333333;
}
.new-price1 {
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: #e73424;
}
.item-info2 {
  color: #999999;
  line-height: 20px;
  font-size: 14px;
}
.new-info-sign {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  height: 20px;
  background: linear-gradient(90deg, #5f98f6 0%, #2e68eb 100%);
  border-radius: 3px;
  color: #ffffff;
  margin-right: 16px;
}
.new-info-color {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  height: 20px;
  background: #f5f7fe;
  border-radius: 3px;
  color: #666666;
}
.item-info2 {
  color: #999999;
  line-height: 20px;
  font-size: 14px;
}
.news-item {
  width: 380px;
  height: 488px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f5f7fe;
  margin-right: 30px;
  margin-bottom: 70px;
}
.news-img {
  width: 380px;
  height: 285px;
  border-radius: 8px;
}
.news-item-info {
  margin: 20px;
}
.news-title1 {
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 14px;
  height: 52px;
}
.news-item-title {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.news-title2 {
  font-size: 14px;
  color: #666666;
  line-height: 20px;
  height: 40px;
  margin-bottom: 26px;
}
.news-item-title {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.news-num {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999999;
  font-size: 12px;
  line-height: 20px;
}
</style>