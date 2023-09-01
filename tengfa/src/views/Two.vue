<template>
  <div class="buy-body">
    <div class="buy-div">
      <div class="buy-search">
        <input type="text" id="buy-search-input" placeholder="搜索品牌、车型" />
        <button type="button" id="buy-search-btn">搜索</button>
      </div>
      <div class="buy-sift">
        <div class="buy-sift-div">
          <div class="sift-div-list">
            <div>品牌：</div>
            <a href="#" :class="{ active: List.Tid == 0 }" @click="goMyself(0)"
              >不限</a
            >
            <a
              href="#"
              v-for="item in List.CustList"
              :key="item.id"
              :class="{ active: List.Tid == item.id }"
              @click="goMyself(item.id)"
              >{{ item.brand }}</a
            >
          </div>
          <div
            @click="Quan"
            v-show="!List.flag"
            id="all-btn-xia"
            class="sift-all-btn btn-xia"
          >
            <span>全部</span>
            <i></i>
          </div>
          <div
            @click="Shou"
            v-show="List.flag"
            id="all-btn-shang"
            class="sift-all-btn btn-shang"
          >
            <span>收起</span>
            <i></i>
          </div>
        </div>
        <div class="sift-all-brand" v-show="List.flag">
          <div class="all-brand-flex">
            <div class="brand-flex-code">
              <div class="brand-flex-title">A</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'A'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">B</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'B'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">C</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'C'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">D</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'D'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">F</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'F'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
          </div>
          <div class="all-brand-flex">
            <div class="brand-flex-code">
              <div class="brand-flex-title">G</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'G'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">H</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'H'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">I</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'I'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">J</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'J'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">K</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'K'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">L</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'L'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">M</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'M'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">N</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'N'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
          </div>
          <div class="all-brand-flex">
            <div class="brand-flex-code">
              <div class="brand-flex-title">O</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'O'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">P</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'P'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">Q</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'Q'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">R</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'R'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">S</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'S'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">T</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'T'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">W</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'W'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">X</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'X'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">Y</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'Y'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">Z</div>
              <div class="brand-flex-item">
                <template v-for="(item, index) in List.CarseriesArrange">
                  <a
                    :key="index"
                    v-if="item.brand.split('-')[0].replace(/\ +/g, '') == 'Z'"
                    >{{ item.brand.split("-")[1] }}</a
                  >
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="buy-sift-div">
          <div class="sift-series-list buy-sift-div-mt">
            <div style="">车系：</div>
            <div class="series-list-div">
              <a
                class="sift-div-checked"
                :class="{ active: List.TSid == 0 }"
                @click="getCarserise(0)"
                >不限</a
              >
              <a
                v-for="(item, index) in List.Carseries"
                :class="{ active: List.TSid == item.id }"
                @click="getCarserise(item.id)"
                :key="index"
                >{{ item.abbreviation }}</a
              >
            </div>
          </div>
        </div>
        <div class="buy-sift-div">
          <div class="sift-div-list">
            <div>车型：</div>
            <a class="sift-div-checked">不限</a>
            <a>两厢轿车</a>
            <a>跑车</a>
            <a>SUV</a>
            <a>MPV</a>
          </div>
        </div>
        <div class="buy-sift-div">
          <div class="sift-div-list" style="margin: 18px 0 8px 0">
            <div>价格：</div>
            <a class="sift-div-checked">不限</a>
            <a>20万以下</a>
            <a>20-30万</a>
            <a>30-50万</a>
            <a>50万以上</a>
            <div class="sift-price-div">
              <div class="sift-price-in">
                <input
                  type="text"
                  id="min-price"
                  maxlength="3"
                  placeholder="输入金额"
                />
                <span>—</span>
                <input
                  type="text"
                  id="max-price"
                  maxlength="3"
                  placeholder="输入金额"
                />
                <span style="margin-left: 10px">万</span>
              </div>
              <button type="button" class="price-in-btn">确定</button>
            </div>
          </div>
        </div>
        <div class="buy-sift-div">
          <div class="sift-div-list">
            <div>更多：</div>
            <div class="tfcar-select">
              <span> 燃油类型 </span>
              <i></i>
              <div class="select-list">
                <a class="sift-div-checked">不限</a>
                <a>汽油</a>
                <a>柴油</a>
                <a>纯电</a>
                <a>油电混合</a>
              </div>
            </div>
            <div class="tfcar-select">
              <span> 驱动类型 </span>
              <i></i>
              <div class="select-list">
                <a class="sift-div-checked">不限</a>
                <a>前驱</a>
                <a>后驱</a>
                <a>四驱</a>
              </div>
            </div>
            <div class="tfcar-select">
              <span> 座位数 </span>
              <i></i>
              <div class="select-list">
                <a class="sift-div-checked">不限</a>
                <a>2座</a>
                <a>4座</a>
                <a>5座</a>
                <a>6座</a>
                <a>7座及以上</a>
              </div>
            </div>
            <div class="tfcar-select">
              <span> 排量 </span>
              <i></i>
              <div class="select-list">
                <a class="sift-div-checked">不限</a>
                <a>1.0L以下</a>
                <a>1.0-1.6L</a>
                <a>1.6-2.0L</a>
                <a>2.0-3.0L</a>
                <a>3.0-4.0L</a>
                <a>4.0L以上</a>
              </div>
            </div>
            <div class="tfcar-select">
              <span> 变速箱 </span>
              <i></i>
              <div class="select-list">
                <a class="sift-div-checked">不限</a>
                <a>手动</a>
                <a>自动</a>
                <a>手自一体</a>
              </div>
            </div>

            <div class="tfcar-select">
              <span> 里程 </span>
              <i></i>
              <div class="select-list">
                <a class="sift-div-checked">不限</a>
                <a>1万公里以内</a>
                <a>1-3万公里</a>
                <a>3-5万公里</a>
                <a>5-8万公里</a>
                <a>8万公里以上</a>
              </div>
            </div>

            <div class="tfcar-select">
              <span> 排放 </span>
              <i></i>
              <div class="select-list">
                <a class="sift-div-checked">不限</a>
                <a>国三</a>
                <a>国四</a>
                <a>国五</a>
                <a>国六</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sift-num">
        <!--            <span class="sift-num-text">您找到 1559 辆好车</span>-->
      </div>
      <div class="sift-list">
        <div class="sift-car-top">
          <div class="car-top-left">
            <a class="top-left-checked">全部</a>
            <a>腾发自营</a>
            <a>车主直售</a>
            <a>限时秒杀</a>
            <a>严选车源</a>
          </div>
          <div class="car-top-right">
            <a class="top-right-checked">默认排序</a>
            <span></span>
            <a>最新发布</a>
            <span></span>
            <a>价格最高</a>
            <span></span>
            <a>价格最低</a>
          </div>
        </div>
        <div class="sift-car-body">
          <a
            v-for="(item, index) in List.TwoList"
            :key="index"
            target="_blank"
            class="list-item"
            @click="goDel(item.ind)"
          >
            <div class="list-item-img">
              <img
                :src="item.cover"
                :style="{ width: '100%', height: '100%' }"
              />
              <div
                class="item-type"
                :class="
                  item.saleType == 0
                    ? 'type-or'
                    : item.saleType == 1
                    ? 'type-bl'
                    : item.saleType == 2
                    ? 'type-gr'
                    : item.saleType == 3
                    ? 'type-re'
                    : ''
                "
              >
                {{
                  item.saleType == 0
                    ? "腾发自营"
                    : item.saleType == 1
                    ? "车主直售"
                    : item.saleType == 2
                    ? "限时特惠"
                    : item.saleType == 3
                    ? "严选好车"
                    : ""
                }}
              </div>
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
                <span class="price1">{{ item.mileage }}万</span>
              </div>
            </div>
          </a>
        </div>
        <div class="sift-car-fy" id="car-fy"></div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  Twocar,
  Carses,
  Select,
  OneSelect,
  Cust,
  TwoSelect,
} from "../api/index";
var router = useRouter();
var route = useRoute();

const List = reactive({
  TwoList: [], //二手车数据
  CarseriesArrange: [], //全部分类
  flag: false,
  Carseries: [], //车系列表
  CustList: [], //推荐列表
  Tid: "", //品牌ID
  TSid: "", //车系ID
});

//获取推荐品牌
let cust = async () => {
  List.CustList = (await Cust()).data.data[0].brands;
};
cust();
//获取全部分类列表
let TwoAll = async () => {
  List.CarseriesArrange = (await Carses()).data.data.content;
};
TwoAll();

//首页跳转过来请求数据
let indexFrom = async () => {
  // console.log(route.query.id);
  if (route.query.id == undefined) {
    List.Tid = 0;
  } else {
    List.Tid = route.query.id;
  }
};
indexFrom();
//自我跳转
let goMyself = (id) => {
  List.Tid = id;
  router.push({
    path: "/twocar",
    query: {
      id,
    },
  });
};

//请求车系数据
let twoCar = async (id) => {
  if (id == 0) {
    List.Carseries = [];
  } else {
    List.Carseries = (await Select(id)).data.data.content;
  }
};
twoCar(List.Tid);

//请求列表数据
let CarList = async (id) => {
  if (id == 0) {
    List.TwoList = (await Twocar(1)).data.data.content;
  } else {
    List.TwoList = (await OneSelect(id)).data.data.content;
  }
};
CarList(List.Tid);

//二级请求
let getCarserise = async (id) => {
  if (id == 0) {
    List.TSid = 0;
    List.TwoList = (await OneSelect(List.Tid)).data.data.content;
  } else {
    List.TSid = id;
    List.TwoList = (await TwoSelect(id)).data.data.content;
    console.log(List.TwoList);
  }
};

watch(
  route,
  (newVal) => {
    twoCar(newVal.query.id);
    CarList(newVal.query.id);
  },
  {
    deep: true,
    immediate: true,
  }
);

let Quan = () => {
  List.flag = true;
};
let Shou = () => {
  List.flag = false;
};
</script>





<style lang="scss" scoped>
a {
  cursor: pointer;
}
blockquote,
body,
button,
dd,
div,
dl,
dt,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
button,
input,
optgroup,
option,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  outline: 0;
}
.buy-body {
  width: 100%;
  height: auto;
  padding-top: 70px;
}
.buy-div {
  width: 1200px;
  margin: 0 auto;
  height: auto;
}
.buy-search {
  width: 880px;
  height: 40px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  margin: 38px 0 20px 0;
  padding-left: 20px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
#buy-search-input {
  height: 100%;
  width: 750px;
  line-height: 20px;
}
input {
  border: none;
  outline: none;
  -webkit-user-select: text !important;
}
#buy-search-btn {
  width: 96px;
  height: 40px;
  background: #5685fe;
  box-sizing: border-box;
  border-radius: 0px 8px 8px 0px;
  border: 1px solid #f0f0f0;
  color: #ffffff;
}
button {
  cursor: pointer;
  border: none;
}
.buy-sift {
  width: 1200px;
  min-height: 290px;
  box-sizing: border-box;
  padding: 30px 20px 30px 20px;
  background: #ffffff;
  margin-bottom: 20px;
  font-size: 14px;
}
.buy-sift-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sift-div-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #333333;
}
.sift-div-list > a {
  margin-left: 20px;
  padding: 0 10px;
  line-height: 20px;
  height: 20px;
}

a {
  color: #333333;
  text-decoration: none;
}
.sift-div-list > a:nth-child(3) {
  margin-left: 10px;
}
.sift-div-list > a {
  margin-left: 20px;
  padding: 0 10px;
  line-height: 20px;
  height: 20px;
}
.sift-all-btn {
  color: #5685fe;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 16px;
}
.sift-all-btn span {
  margin-right: 7px;
}

.sift-all-btn {
  color: #5685fe;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 16px;
}

.btn-xia i {
  width: 12px;
  height: 7px;
  display: inline-block;
  background-image: url(https://www.tf2sc.cn/static/img/xia.png);
  background-repeat: no-repeat;
  background-position: 50%;
}
.btn-shang i {
  width: 12px;
  height: 7px;
  display: inline-block;
  background-image: url(https://www.tf2sc.cn/static/img/shang.png);
  background-repeat: no-repeat;
  background-position: 50%;
}
.sift-all-brand {
  display: flex;
  padding: 30px 0 30px 62px;
  // display: none;
  border-bottom: 1px solid #f0f0f0;
}
.all-brand-flex {
  width: 365px;
}
.brand-flex-code {
  display: flex;
}
.brand-flex-title {
  color: #5685fe;
  margin-right: 10px;
  line-height: 20px;
}
.brand-flex-item {
  display: flex;
  flex-wrap: wrap;
}
.brand-flex-item > a {
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
}
.buy-sift-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sift-series-list {
  display: flex;
}
.buy-sift-div-mt {
  margin-top: 30px;
}
.series-list-div {
  display: flex;
  flex-wrap: wrap;
  width: 1030px;
}
.series-list-div > a {
  margin-left: 20px;
  margin-bottom: 30px;
  padding: 0 10px;
  line-height: 20px;
  height: 20px;
}

.series-list-div > a:nth-child(2) {
  margin-left: 10px;
}
.sift-price-div {
  width: 322px;
  height: 44px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2px;
  font-size: 14px;
}
.sift-price-in {
  display: flex;
  align-items: center;
}
.sift-price-in input {
  width: 90px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding-left: 14px;
}
.sift-price-in span {
  margin: 0 6px;
}
.price-in-btn {
  width: 68px;
  height: 40px;
  background: #f5f7fe;
  border-radius: 4px;
}
button {
  cursor: pointer;
  border: none;
}
.sift-div-list .tfcar-select {
  margin-left: 20px;
}
.tfcar-select {
  width: 116px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding: 0 13px;
  position: relative;
  font-size: 14px;
  cursor: pointer;
}
.tfcar-select span {
  line-height: 40px;
}
.tfcar-select i {
  float: right;
  background-image: url(https://www.tf2sc.cn/static/img/icon.png);
  background-position: -6px -5px;
  background-repeat: no-repeat;
  width: 14px;
  height: 7px;
  display: block;
  margin-top: 17px;
}
.select-list {
  display: none;
  position: absolute;
  top: 39px;
  left: -1px;
  z-index: 1;
  min-width: 116px;
  max-height: 218px;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: #ffffff;
}
.select-list > a {
  width: 100%;
  height: 34px;
  padding-left: 14px;
  line-height: 34px;
  display: inline-block;
  /* margin: 6px 0; */
  box-sizing: border-box;
}
.active {
  color: #ffffff;
  background-color: #5685fe;
}
// . {
//   color: #ffffff;
//   background-color: #5685fe;
//   /* border-radius: 4px; */
// }
.sift-num {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size: 14px;
}
.sift-list {
  width: 100%;
  height: auto;
  padding-bottom: 82px;
}
.sift-car-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
}
.car-top-left {
  margin-top: 11px;
}
.car-top-left a {
  font-size: 18px;
  line-height: 32px;
  font-weight: 600;
  padding-bottom: 6px;
  margin-right: 30px;
  display: inline-block;
}
.top-left-checked {
  color: #5685fe;
  border-bottom: 4px solid #5685fe;
  border-radius: 2px;
}
.car-top-right {
  width: 307px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  margin-bottom: 13px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.car-top-right a {
  display: block;
  width: 76px;
  height: 40px;
  box-sizing: border-box;
  text-align: center;
  padding: 10px 0;
}
.top-right-checked {
  color: #5685fe;
}
.car-top-right span {
  display: inline-block;
  width: 1px;
  height: 20px;
  background: #f0f0f0;
}
.car-top-right a {
  display: block;
  width: 76px;
  height: 40px;
  box-sizing: border-box;
  text-align: center;
  padding: 10px 0;
}
.sift-car-body {
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
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
.type-or {
  background: linear-gradient(90deg, #ff8856 0%, #ff4725 100%);
}
.type-bl {
  background: linear-gradient(90deg, #5f98f6 0%, #2e68eb 100%);
}
.type-gr {
  background: linear-gradient(90deg, #4dd4d4 0%, #0cbfcd 100%);
}
.type-re {
  background: linear-gradient(90deg, #ff1766 0%, #ff2a23 100%);
}
.sift-car-fy {
  display: flex;
  justify-content: center;
}
</style>