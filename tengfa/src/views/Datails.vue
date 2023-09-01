<template>
  <div>
    <div class="detail" v-for="(item, index) in Data.Tabarr" :key="index">
      <div class="detail1" id="ershou1">
        <div class="detail-div detail-info">
          <div class="detail-info-left">
            <img id="left-imgurl" :src="item.cover" ref="Bg" />
            <div class="left-imgs">
              <div class="imgs-div">
                <img
                  @mouseenter="Tab($event.target)"
                  v-for="(x, y) in Data.photoArr"
                  :key="y"
                  :src="x"
                />
              </div>
              <div class="imgs-change" id="change-left">
                <img src="	https://www.tf2sc.cn/static/img/zuo.png" />
              </div>
              <div class="imgs-change" id="change-right" style="display: none">
                <img src="	https://www.tf2sc.cn/static/img/you.png" />
              </div>
            </div>
          </div>
          <div class="detail-info-right">
            <div class="info-carid">
              车架号：<span>{{ item.carId }}</span>
            </div>
            <div class="info-title">
              {{ item.carName }}
            </div>
            <div class="info-detail">
              <div class="detail-item" style="width: 98px">
                <div>{{ Data.Year }}年{{ Data.Mount }}月</div>
                <div class="item-title">上牌时间</div>
              </div>
              <div class="item-line"></div>
              <div class="detail-item">
                <div>{{ item.mileage }}万公里</div>
                <div class="item-title">公里数</div>
              </div>
              <div class="item-line"></div>
              <div class="detail-item">
                <div>{{ Data.color }}</div>
                <div class="item-title">车身颜色</div>
              </div>
              <div class="item-line"></div>
              <div class="detail-item">
                <div>{{ Data.gearbox }}</div>
                <div class="item-title">变速箱</div>
              </div>
              <div class="item-line"></div>
              <div class="detail-item" style="width: 64px">
                <div>{{ item.displacement }}L</div>
                <div class="item-title">排量</div>
              </div>
              <div class="detail-item" style="width: 98px">
                <div>{{ Data.Parme.fuel }}</div>
                <div class="item-title">燃油方式</div>
              </div>
              <div class="item-line"></div>
              <div class="detail-item">
                <div>{{ Data.Parme.emissionStandard }}</div>
                <div class="item-title">排放标准</div>
              </div>
              <div class="item-line"></div>
              <div class="detail-item">
                <div>{{ Data.Time[0] }}年{{ Data.Time[1] }}月</div>
                <div class="item-title">出厂日期</div>
              </div>
              <div class="item-line"></div>
              <div class="detail-item">
                <div>{{ Data.Parme.carTransfer }}</div>
                <div class="item-title">过户次数</div>
              </div>
            </div>
            <div class="info-price">
              <span class="price1">{{ item.currentPrice }}万</span>
              <span class="price2"
                >新车价：{{ Data.priceVo.carNetPrice }}万</span
              >
              <span class="price3"
                >为您节约
                <span>{{
                  (Data.priceVo.carNetPrice - item.currentPrice).toFixed(2)
                }}</span
                >万</span
              >
            </div>
            <div class="info-anjie">
              <div class="triangle"></div>
              <img src="https://www.tf2sc.cn/static/img/anjie.png" />
              <span>灵活按揭</span>
              <span class="anjie">
                首付<span>30%</span>，月供<span>4,624元</span>(36)期
              </span>
            </div>
            <div class="info-advisory">
              <button type="button" class="advisory-online online-consult">
                在线咨询
              </button>
              <button type="button" class="advisory-tel">联系电话</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-div">
      <div class="option-title">
        <div class="option-line"></div>
        车辆描述
      </div>
      <div class="remark">暂无描述</div>
      <div class="service">
        <div class="service-title">
          <div>//</div>
          <div class="service1">服务承诺</div>
          <div>//</div>
        </div>
        <div class="service-info">
          <div class="service-item">
            <img src="	https://www.tf2sc.cn/static/img/ketui.png" />
            <div>7天无理由可退</div>
          </div>
          <div class="service-item">
            <img src="https://www.tf2sc.cn/static/img/kehuan.png" />
            <div>15天可换</div>
          </div>
          <div class="service-item">
            <img src="https://www.tf2sc.cn/static/img/zhibao.png" />
            <div>终身质保</div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-div" id="ershou2">
      <div class="option-title">
        <div class="option-line"></div>
        检测报告
      </div>
      <div class="report-img"></div>
      <div class="report-detail">
        <div class="report-item">
          <span>基本信息核查</span>
          <div class="report-item-ok">
            <img src="	https://www.tf2sc.cn/static/img/tongguo.png" />
            <span>已检测</span>
          </div>
        </div>
        <div class="report-item">
          <span>动力系统检测</span>
          <div class="report-item-ok">
            <img src="	https://www.tf2sc.cn/static/img/tongguo.png" />
            <span>已检测</span>
          </div>
        </div>
        <div class="report-item">
          <span>车身外观检测</span>
          <div class="report-item-ok">
            <img src="	https://www.tf2sc.cn/static/img/tongguo.png" />
            <span>已检测</span>
          </div>
        </div>
        <div class="report-item">
          <span>功能部件检测</span>
          <div class="report-item-ok">
            <img src="	https://www.tf2sc.cn/static/img/tongguo.png" />
            <span>已检测</span>
          </div>
        </div>
        <div class="report-item">
          <span>重大事故排查</span>
          <div class="report-item-ok">
            <img src="	https://www.tf2sc.cn/static/img/tongguo.png" />
            <span>已检测</span>
          </div>
        </div>
        <div class="report-mode"></div>
      </div>
      <div class="report-code">
        <img
          src="https://www.tf2sc.cn/api/tfcar/share/inspectionReport/202106161151190127"
          class="report-wx"
        />
        <div class="report-code-text">
          <div class="code1">微信扫码 查看<span>完整</span>检测报告</div>
          <div class="code2">
            <img src="	https://www.tf2sc.cn/static/img/wxsm.png" />
            <div class="code2-text">
              <div style="margin-bottom: 24px">打开微信</div>
              <div>点击页面右上角“+”，打开扫一扫</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-div" id="ershou3">
      <div class="option-title">
        <div class="option-line"></div>
        车辆图片
      </div>
      <div class="detail-photos">
        <img v-for="(item, index) in Data.Xiangqing" :key="index" :src="item" />
      </div>
    </div>
    <div class="detail-div" id="ershou4">
      <div class="option-title">
        <div class="option-line"></div>
        同类推荐
      </div>
      <div class="recommend-list">
        <template v-for="(item, index) in Data.RecomArr">
          <a
            target="_blank"
            class="list-item"
            v-if="index < 4"
            :key="index"
            @click="goDel(item.ind)"
          >
            <div class="list-item-img">
              <img
                :src="item.cover"
                :style="{ width: '100%', height: '100%' }"
              />
              <div class="item-type type-gr">严选车源</div>
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
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
// import router from "@/router";
import { onMounted, reactive, ref, watch } from "vue";
import { Datails, Recom } from "../api/index";

const route = useRoute();
const router = useRouter();

const Data = reactive({
  Tabarr: [{}],
  photoArr: [],
  Year: "",
  Mount: "",
  color: "",
  gearbox: "",
  Parme: {},
  Time: [],
  priceVo: [],
  Xiangqing: [],
  RecomArr: [],
});
let Bg = ref(null);
let Tab = (e) => {
  Bg.value[0].src = e.src;
};

onMounted(() => {});

let getList = async (Id) => {
  console.log(Id);
  let obj = await Datails(Id);
  Data.Tabarr[0] = obj.data.data;
  Data.Parme = obj.data.data.parameterVo;
  Data.priceVo = obj.data.data.priceVo;
  Data.photoArr = obj.data.data.photoVo.carousel.split(",");
  Data.Xiangqing = obj.data.data.photoVo.detail.split(",");
  Data.Year = obj.data.data.dateOfRegistration.split("-")[0];
  Data.Mount = obj.data.data.dateOfRegistration.split("-")[1];
  Data.color = obj.data.data.parameterVo.carColor;
  Data.gearbox = obj.data.data.parameterVo.gearbox;
  if (Data.Parme.deliveryTime == undefined) {
    Data.Time = ["--", "--"];
  } else {
    Data.Time = Data.Parme.deliveryTime.split("-");
  }
  if (Data.Parme.carTransfer == undefined) {
    Data.Parme.carTransfer = "-";
  } else {
  }
  console.log(Data.Tabarr[0]);
};

let getRecom = async (Id) => {
  let obj = await Recom(Id);
  Data.RecomArr = obj.data.data;
};
getList(route.query.id);
getRecom(route.query.id);
//跳转详情页
const goDel = (id) => {
  getList(id);
  getRecom(id);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  height: auto;
  background: #ffffff;
}
.detail1 {
  width: 100%;
  height: auto;
  box-shadow: 0px 2px 10px 0px rgba(170, 170, 216, 0.4);
  border-radius: 14px;
  padding-top: 90px;
  padding-bottom: 30px;
  margin-bottom: 50px;
}
.detail-info {
  display: flex;
}
.detail-div {
  width: 1200px;
  height: auto;
  margin: 0 auto;
}
.detail-info-left {
  width: 620px;
  height: 502px;
}
.detail-info-left > img {
  width: 600px;
  height: 400px;
  display: block;
  border: 1px solid #e4e6ee;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
}
.detail-info-left > img {
  width: 600px;
  height: 400px;
  display: block;
  border: 1px solid #e4e6ee;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
}
.imgs-div {
  display: flex;
}
.imgs-div > img {
  width: 116px;
  height: 78px;
  border-radius: 4px;
  border: 1px solid #e4e6ee;
  margin-right: 10px;
  display: block;
}
.imgs-div > img {
  width: 116px;
  height: 78px;
  border-radius: 4px;
  border: 1px solid #e4e6ee;
  margin-right: 10px;
  display: block;
}
.info-carid {
  font-size: 14px;
  line-height: 20px;
  margin-top: 20px;
}
.info-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  margin-top: 30px;
}
.info-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  margin-top: 30px;
}
.detail-item {
  height: 44px;
  font-size: 16px;
  margin-bottom: 30px;
  width: 104px;
}
.item-title {
  font-size: 12px;
  color: #999999;
  margin-top: 4px;
}
.item-line {
  width: 1px;
  height: 44px;
  background: #f0f0f0;
  margin-right: 20px;
}
.info-price {
  margin-top: 40px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.price1 {
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  color: #e73424;
  margin-right: 10px;
}

.price2 {
  color: #666666;
  text-decoration: line-through;
  margin-right: 10px;
}
.price3 {
  font-weight: 600;
}
.price3 span {
  color: #f5994f;
}
.info-anjie {
  width: 578px;
  height: 40px;
  background: linear-gradient(297deg, #fff8f3 0%, #ffede0 100%);
  margin-top: 12px;
  position: relative;
  display: flex;
  align-items: center;
}
.triangle {
  width: 0;
  height: 0;
  position: absolute;
  left: 10px;
  top: -14px;
  border: 7px solid transparent;
  border-bottom: 7px solid #ffede0;
}
.info-detail {
  width: 578px;
  height: 138px;
  background: #f9f9f9;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 20px;
}
.info-anjie > img {
  width: 19.71px;
  height: 19.71px;
  margin-left: 7px;
  margin-right: 6px;
}
.anjie {
  margin-left: 30px;
}
.anjie > span {
  color: #f5994f;
}
.info-advisory {
  margin-top: 68px;
}
.info-advisory > button {
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
}
.advisory-online {
  width: 140px;
  height: 48px;
  background: #3298fc;
  box-shadow: 0px 2px 16px 0px rgba(43, 125, 242, 0.4);
  border-radius: 4px;
}
button {
  cursor: pointer;
  border: none;
}
.advisory-tel {
  width: 278px;
  height: 48px;
  background: #2567ff;
  box-shadow: 0px 4px 16px 0px rgba(88, 136, 255, 0.4);
  border-radius: 4px;
  margin-left: 30px;
  cursor: inherit;
}
#change-left {
  left: 0;
  display: none;
}
.imgs-change {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 28px;
  height: 80px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0px 4px 4px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.option-title {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 20px;
}
.option-line {
  width: 10px;
  height: 30px;
  background: #5685fe;
  margin-right: 20px;
}
.remark {
  font-size: 16px;
  line-height: 28px;
  width: 1200px;
  margin-bottom: 30px;
}
.service {
  margin: 0 auto;
  width: 1000px;
  height: 208px;
  box-sizing: border-box;
  background-image: url(https://www.tf2sc.cn/static/img/chengnuo.png);
  background-repeat: no-repeat;
  background-size: 1000px 208px;
  margin-bottom: 52px;
}
.service-title {
  color: #f3d7a9;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
}
.service1 {
  font-family: pmzd;
  font-size: 36px;
  margin: 0 24px;
  display: block;
  line-height: 30px;
}
.service-info {
  margin-top: 48px;
  font-size: 16px;
  color: #f3ddb4;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.service-item {
  text-align: center;
  width: 333px;
}
.report-img {
  width: 1001px;
  height: 210px;
  background-image: url(https://www.tf2sc.cn/static/img/baogao.png);
  background-repeat: no-repeat;
  background-size: 1001px 210px;
  margin: 0 auto;
}
.report-detail {
  margin: 30px 140px 0 140px;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  position: relative;
}
.report-item:nth-child(2n-1) {
  margin-right: 176px;
}
.report-item {
  display: flex;
  width: 372px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.report-item-ok {
  display: flex;
  align-items: center;
}
.report-code {
  padding: 50px 0 50px 350px;
  display: flex;
  align-items: center;
}
.report-wx {
  width: 190px;
  height: 190px;
  border-radius: 8px;
  border: 1px solid #979797;
}
.report-code-text {
  margin-left: 20px;
}
.code1 {
  font-size: 24px;
  font-weight: 600;
  color: #222222;
  line-height: 32px;
}
.code1 > span {
  color: #5685fe;
}
.code2 {
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.code2 > img {
  width: 24px;
  height: 80px;
}
.code2-text {
  margin-left: 16px;
  line-height: 32px;
  font-size: 16px;
}
.detail-photos {
  width: 100%;
  height: auto;
  padding-bottom: 120px;
  display: flex;
  flex-wrap: wrap;
}
.detail-photos > img:nth-child(2n-1) {
  margin-right: 20px;
}
.detail-photos > img {
  width: 590px;
  height: 394px;
  border-radius: 4px;
  margin-bottom: 20px;
}
.recommend-list {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 70px;
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
a {
  color: #333333;
  text-decoration: none;
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
.type-gr {
  background: linear-gradient(90deg, #4dd4d4 0%, #0cbfcd 100%);
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
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  color: #e73424;
  margin-right: 10px;
}
</style>