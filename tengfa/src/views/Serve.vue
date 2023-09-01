<template>
  <div>
    <main class="learnTengfa_main">
      <div class="w">
        <div class="learnTengfa_mainTitle">TENGFA</div>
        <div class="learnTengfa_mainTitle2">腾发二手车</div>
        <div class="learnTengfa_whiteLine"></div>
        <img
          src="https://www.tf2sc.cn/static/img/left.png"
          alt=""
          class="learnTengfa_leftJT"
        />
        <span class="learnTengfa_mainFont"
          >买亏可退、7天无理由退车、15天可换、终身质保</span
        >
        <img
          src="	https://www.tf2sc.cn/static/img/right.png"
          alt=""
          class="learnTengfa_rightJT"
        />
        <!-- tab菜单区域 -->
        <div class="learnTengfa_mainTab">
          <ul class="mainTab_item w">
            <li class="learnTengfa_active">了解腾发</li>
            <li><a>售后服务</a></li>
            <li><a>汽车改装</a></li>
            <li><a>保险服务</a></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.learnTengfa_main {
  background: url(https://www.tf2sc.cn/static/img/learnTengfa_main.jpg)
    no-repeat center center;
  width: 100%;
  height: 600px;
  padding-top: 70px;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
.learnTengfa_mainTitle {
  padding-top: 104px;
  padding-left: 481px;
  font-size: 60px;
  font-weight: 600;
  color: #e9ebf4;
  line-height: 84px;
  opacity: 0.1;
}

.learnTengfa_mainTitle2 {
  margin-top: -45px;
  margin-left: 468px;
  font-size: 44px;
  font-weight: 500;
  color: #ffffff;
  line-height: 62px;
}
.learnTengfa_whiteLine {
    margin-left: 570px;
    margin-top: 12px;
    width: 60px;
    height: 6px;
    background: #FFFFFF;
    border-radius: 4px;
}
.learnTengfa_leftJT {
    /* padding-top: 31px; */
    padding-left: 198px;
}
.learnTengfa_mainFont {
    display: inline-block;
    padding-top: 34px;
    padding-left: 12px;
    font-size: 28px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 40px;
}
.learnTengfa_rightJT {
    float: left;
    margin-left: 969px;
    margin-top: -37px;
}
.learnTengfa_mainTab {
    margin-top: 210px;
    width: 1200px;
    height: 60px;
    background: #F2F4FB;
    border-radius: 8px 8px 0px 0px;
}
.mainTab_item li {
    float: left;
    width: 132px;
    height: 60px;
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    line-height: 60px;
    background: #FFFFFF;
    color: #222;
    border-radius: 8px 8px 0px 0px;
    background-color: rgb(242, 244, 251);
    cursor: pointer;
    border: none;
}
.mainTab_item .learnTengfa_active {
    background-color: #fff;
    color: #5685FE;
}
</style>