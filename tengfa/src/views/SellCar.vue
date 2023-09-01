<template>
  <div>
    <main class="main">
      <div class="sellCar_top w">
        <div class="top_container">
          <!-- 左侧表单区域 -->
          <div class="top_left">
            <div class="top_title">HI，在线评估</div>
            <div class="top_title2">提交信息，快速获取估价～</div>
            <div class="top_input input_left">
              <input
                type="text"
                maxlength="8"
                placeholder="姓名"
                id="input_username"
              />
              <input
                type="text"
                maxlength="11"
                placeholder="手机号码"
                class="input_right"
                id="input_tel"
              />
            </div>
            <div class="top_input input_left">
              <input
                type="text"
                maxlength="32"
                placeholder="评估车型"
                id="input_carSize"
              />
              <input
                type="text"
                maxlength="9"
                placeholder="公里数"
                class="input_right"
                id="input_num"
              />
            </div>
            <div class="top_input3 input_left">
              <input
                type="text"
                class="layui-input"
                id="input_time"
                placeholder="上牌时间"
                lay-key="1"
              />
            </div>
            <div class="input_submit">
              <button type="submit" id="submit">提交信息</button>
            </div>
          </div>
          <!-- 右侧图片区 -->
          <div class="top_right">
            <div class="haochu">选择腾发卖车的好处</div>
            <div class="top_right_title">
              <img
                src="	https://www.tf2sc.cn/static/img/sellCar_duigou.png"
                alt=""
                class="sellCar_duigou"
              />
              <span class="naqian">卖价高，最快可当天拿钱</span>
              <img
                src="https://www.tf2sc.cn/static/img/sellCar_duigou.png"
                alt=""
                class="sellCar_duigou1"
              />
              <span class="shengshi">卖车过程透明，省时省心</span>
            </div>
            <div>
              <div class="mjg">卖价高，最快可当天完成过户，当<br />天拿钱</div>
              <div class="gctm">卖车过程透明看得到，专人办理卖<br />车服务</div>
            </div>
            <div style="padding-top: 31px">
              <div style="display: flex; align-items: center">
                <img
                  src="https://www.tf2sc.cn/static/img/sellCar_duigou.png"
                  alt=""
                  class="sellCard_duigou2"
                />
                <div class="xdg">实体展厅卖车信得过</div>
              </div>

              <div class="stjy">20年实体经营，交易有保障</div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="sellCar_middle">
      <div class="middle_container w">
        <span>常见问题</span>
        <div class="blueLine"></div>
        <!-- 四个模块部分 -->
        <div class="cjproblem">
          <div class="sellCar_first">
            <div class="first_title">卖车需要准备哪些资料？</div>
            <div class="first_font">
              需要先在网站提供您的联系电话，车辆品牌、型号等基本信息。待服务人员联系您后，在约定时间内准备好
              <br />
              1、身份证；&nbsp;6、车示标（环保标、检字标、交强险标）；
              <br />
              2、行驶证；&nbsp;7、交强险单；
              <br />
              3、车辆登记证；&nbsp;8、购置税本及购置税发票；
              <br />
              4、车辆钥匙；&nbsp;9、购车发票/最近一次过户发票；
              <br />
              5、说明书保养手册
            </div>
          </div>
          <div class="sellCar_second">
            <div class="second_title">通过腾发出售车辆需要什么费用？</div>
            <div class="second_font">
              在腾发寄售车辆，卖车快，卖价高。整个服务过程透明。评估师给参考售价，明确收费内容，同意后签订寄售协议。卖出的车辆同样也享受腾发的质保服务。
            </div>
          </div>
          <div class="sellCar_third">
            <div class="third_title">卖车具体的流程是怎么样的呢？</div>
            <div class="third_font">
              1、提交资料及联系方式。
              <br />
              2、预约开车到店检测车辆或直接来店检测车辆。
              <br />
              3、现金交易结款。
              <br />
              4、办理过户手续。
            </div>
          </div>
          <div class="sellCar_forth">
            <div class="forth_title">通过腾发卖车的好处？</div>
            <div class="forth_font">
              卖价高：3万余平的实体展厅，近5000平独立的售后服务中心。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.main {
  height: 587px;
  width: 100%;
  padding-top: 101px;
  /* background-color: #000; */
}

.sellCar_top {
  background: url(https://www.tf2sc.cn/static/img/top.png) no-repeat center
    center;
  width: 1200px;
  height: 486px;
}

.w {
  width: 1200px;
  margin: 0 auto;
}
.top_container {
  display: flex;
}
.top_left {
  width: 540px;
  height: 484px;
  /* border: 1px solid #000; */
}
.top_title {
  display: inline-block;
  padding-top: 50px;
  padding-left: 30px;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  line-height: 32px;
}
.top_title2 {
  display: inline-block;
  padding-left: 20px;
  padding-top: 60px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
  opacity: 0.8;
}
.input_left {
  padding-left: 40px;
  padding-top: 30px;
}
.top_input input,
.top_input span {
  padding-left: 14px;
  width: 198px;
  height: 46px;
  background: #ffffff;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  /* caret-color: #5685FE; */
}
input {
  outline: none;
}
.input_right {
  margin-left: 26px;
}
.top_input3 input,
.top_input3 div {
  padding-left: 14px;
  width: 454px;
  height: 46px;
  background: #ffffff;
  border-radius: 4px;
  border: none;
  line-height: 46px;
  color: #525b78;
}
.layui-input,
.layui-textarea {
  display: block;
  width: 100%;
  padding-left: 10px;
}

.layui-input,
.layui-select,
.layui-textarea {
  height: 38px;
  line-height: 1.3;
  line-height: 38px\9;
  border-width: 1px;
  border-style: solid;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.85);
  border-radius: 2px;
}
.input_submit button {
  margin-left: 40px;
  margin-top: 50px;
  width: 462px;
  height: 50px;
  background: #5685fe;
  border-radius: 4px;
  border: none;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  opacity: 0.9;
}
.top_right {
  width: 656px;
  height: 484px;
  /* border: 1px solid red; */
}
.haochu {
  padding-top: 53px;
  padding-left: 42px;
  width: 216px;
  height: 29px;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  line-height: 29px;
}
.top_right_title {
  padding-top: 52px;
  display: flex;
  align-items: center;
}
.sellCar_duigou {
  padding-left: 42px;
}
.sellCar_duigou {
  padding-left: 42px;
}
.naqian {
  padding-left: 13px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  vertical-align: super;
  line-height: 24px;
}
.sellCar_duigou1 {
  padding-left: 65px;
}
.shengshi {
  padding-left: 12px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  vertical-align: super;
}
.mjg {
  display: inline-block;
  padding-left: 80px;
  padding-top: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
  opacity: 0.6;
}
.gctm {
  display: inline-block;
  padding-left: 87px;
  padding-top: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
  opacity: 0.6;
}
.sellCard_duigou2 {
  padding-left: 42px;
}
.xdg {
  display: inline-block;
  padding-left: 13px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  vertical-align: super;
  line-height: 22px;
}
.stjy {
  padding-left: 80px;
  padding-top: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
  opacity: 0.6;
}
.sellCar_middle {
    width: 100%;
    height: 814px;
    background-color: #F2F4FB;
}
.middle_container {
    width: 1220px;
    height: 814px;
    /* background-color: #fff; */
    padding-top: 50px;
}
.middle_container span {
    font-size: 18px;
    font-weight: 600;
    color: #5685FE;
    padding-left: 564px;
}
.middle_container .blueLine {
    width: 36px;
    height: 4px;
    background: #5685FE;
    border-radius: 2px;
    margin-left: 582px;
    margin-top: 6px;
    margin-bottom: 30px;
}
.cjproblem {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1200px;
    height: 620px;
    /* background-color: #bfa; */
}
.sellCar_first {
    width: 590px;
    height: 295px;
    /* background: #918585; */
    box-shadow: 0px 0px 10px 0px rgba(74, 101, 172, 0.05);
    border-radius: 8px;
    background: url(https://www.tf2sc.cn/static/img/sellCar_first.jpg) no-repeat right bottom;
    cursor: pointer;
}
.sellCar_first .first_title {
    font-size: 24px;
    font-weight: 700;
    color: #333333;
    margin-top: 30px;
    margin-left: 50px;
}
.sellCar_first .first_font {
    margin-top: 20px;
    margin-left: 50px;
    width: 480px;
    height: 182px;
    font-size: 14px;
    font-weight: 400;
    color: #525B78;
    /* border: 1px solid red; */
    line-height: 26px;
}
.sellCar_second {
    width: 590px;
    height: 295px;
    /* background: #000; */
    box-shadow: 0px 0px 10px 0px rgba(74, 101, 172, 0.05);
    border-radius: 8px;
    background: url(https://www.tf2sc.cn/static/img/sellCar_second.jpg) no-repeat right bottom;
    cursor: pointer;
}
.sellCar_second .second_title {
    font-size: 24px;
    font-weight: 700;
    color: #333333;
    margin-top: 30px;
    margin-left: 48px;
}
.sellCar_second .second_font {
    margin-top: 20px;
    margin-left: 50px;
    width: 480px;
    height: 182px;
    font-size: 14px;
    font-weight: 400;
    color: #525B78;
    /* border: 1px solid red; */
    line-height: 26px;
}
.sellCar_third {
    width: 590px;
    height: 295px;
    /* background: #000; */
    box-shadow: 0px 0px 10px 0px rgba(74, 101, 172, 0.05);
    border-radius: 8px;
    background: url(https://www.tf2sc.cn/static/img/sellCar_third.jpg) no-repeat right bottom;
    cursor: pointer;
}
.sellCar_third .third_title {
    font-size: 24px;
    font-weight: 700;
    color: #333333;
    margin-top: 30px;
    margin-left: 48px;
}
.sellCar_third .third_font {
    margin-top: 20px;
    margin-left: 50px;
    width: 480px;
    height: 182px;
    font-size: 14px;
    font-weight: 400;
    color: #525B78;
    /* border: 1px solid red; */
    line-height: 26px;
}
.sellCar_forth {
    width: 590px;
    height: 295px;
    /* background: #000; */
    box-shadow: 0px 0px 10px 0px rgba(74, 101, 172, 0.05);
    border-radius: 8px;
    background: url(https://www.tf2sc.cn/static/img/sellCar_forth.jpg) no-repeat right bottom;
    cursor: pointer;
}
.sellCar_forth .forth_title {
    font-size: 24px;
    font-weight: 700;
    color: #333333;
    margin-top: 30px;
    margin-left: 48px;
}
.sellCar_forth .forth_font {
    margin-top: 20px;
    margin-left: 50px;
    width: 480px;
    height: 182px;
    font-size: 14px;
    font-weight: 400;
    color: #525B78;
    /* border: 1px solid red; */
    line-height: 26px;
}
</style>