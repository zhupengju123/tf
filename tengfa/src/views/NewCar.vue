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
            <a class="sift-div-checked">不限</a>
            <a href="/c0/ershouche/b7">宝马</a>
            <a href="/c0/ershouche/b9">奔驰</a>
            <a href="/c0/ershouche/b1">奥迪</a>
            <a href="/c0/ershouche/b36">丰田</a>
            <a href="/c0/ershouche/b79">路虎</a>
          </div>
          <div id="all-btn-xia" class="sift-all-btn btn-xia">
            <span>全部</span>
            <i></i>
          </div>
          <div id="all-btn-shang" class="sift-all-btn btn-shang">
            <span>收起</span>
            <i></i>
          </div>
        </div>
        <div class="sift-all-brand">
          <div class="all-brand-flex">
            <div class="brand-flex-code">
              <div class="brand-flex-title">A</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b1">奥迪</a>
                <a href="/c0/ershouche/b2">阿斯顿·马丁</a>
                <a href="/c0/ershouche/b3">阿尔法·罗密欧</a>
                <a href="/c0/ershouche/b4">AC Schnitzer</a>
                <a href="/c0/ershouche/b536">ALPINA</a>
                <a href="/c0/ershouche/b1407">爱驰</a>
                <a href="/c0/ershouche/b1714">AUXUN傲旋</a>
                <a href="/c0/ershouche/b1721">ARCFOX极狐</a>
                <a href="/c0/ershouche/b2440">AITO</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">B</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b5">本田</a>
                <a href="/c0/ershouche/b6">别克</a>
                <a href="/c0/ershouche/b7">宝马</a>
                <a href="/c0/ershouche/b8">比亚迪</a>
                <a href="/c0/ershouche/b9">奔驰</a>
                <a href="/c0/ershouche/b10">标致</a>
                <a href="/c0/ershouche/b11">保时捷</a>
                <a href="/c0/ershouche/b12">奔腾</a>
                <a href="/c0/ershouche/b13">北京汽车</a>
                <a href="/c0/ershouche/b14">北汽制造</a>
                <a href="/c0/ershouche/b15">宝骏</a>
                <a href="/c0/ershouche/b16">宾利</a>
                <a href="/c0/ershouche/b17">北汽威旺</a>
                <a href="/c0/ershouche/b18">布加迪</a>
                <a href="/c0/ershouche/b19">巴博斯</a>
                <a href="/c0/ershouche/b20">保斐利</a>
                <a href="/c0/ershouche/b115">BEIJING汽车</a>
                <a href="/c0/ershouche/b156">北汽幻速</a>
                <a href="/c0/ershouche/b167">北汽新能源</a>
                <a href="/c0/ershouche/b172">宝沃</a>
                <a href="/c0/ershouche/b499">比速</a>
                <a href="/c0/ershouche/b573">北汽道达</a>
                <a href="/c0/ershouche/b654">铂驰</a>
                <a href="/c0/ershouche/b853">比德文汽车</a>
                <a href="/c0/ershouche/b2398">北汽瑞翔</a>
                <a href="/c0/ershouche/b2432">百智新能源</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">C</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b21">长安</a>
                <a href="/c0/ershouche/b22">长城</a>
                <a href="/c0/ershouche/b23">长安欧尚</a>
                <a href="/c0/ershouche/b24">昌河</a>
                <a href="/c0/ershouche/b497">成功</a>
                <a href="/c0/ershouche/b1716">车驰汽车</a>
                <a href="/c0/ershouche/b1768">创维汽车</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">D</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b25">大众</a>
                <a href="/c0/ershouche/b26">东风风行</a>
                <a href="/c0/ershouche/b27">东南</a>
                <a href="/c0/ershouche/b28">东风小康</a>
                <a href="/c0/ershouche/b29">道奇</a>
                <a href="/c0/ershouche/b30">东风风神</a>
                <a href="/c0/ershouche/b31">DS</a>
                <a href="/c0/ershouche/b32">东风风度</a>
                <a href="/c0/ershouche/b33">东风</a>
                <a href="/c0/ershouche/b170">东风风光</a>
                <a href="/c0/ershouche/b574">电咖</a>
                <a href="/c0/ershouche/b662">达契亚</a>
                <a href="/c0/ershouche/b1705">大运</a>
                <a href="/c0/ershouche/b2399">电动屋</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">F</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b35">福特</a>
                <a href="/c0/ershouche/b36">丰田</a>
                <a href="/c0/ershouche/b37">菲亚特</a>
                <a href="/c0/ershouche/b38">法拉利</a>
                <a href="/c0/ershouche/b39">福田</a>
                <a href="/c0/ershouche/b40">福迪</a>
                <a href="/c0/ershouche/b162">福汽启腾</a>
                <a href="/c0/ershouche/b543">飞碟</a>
                <a href="/c0/ershouche/b545">福田乘用车</a>
                <a href="/c0/ershouche/b1704">枫叶汽车</a>
                <a href="/c0/ershouche/b2314">飞凡汽车</a>
              </div>
            </div>
          </div>
          <div class="all-brand-flex">
            <div class="brand-flex-code">
              <div class="brand-flex-title">G</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b44">广汽传祺</a>
                <a href="/c0/ershouche/b45">广汽吉奥</a>
                <a href="/c0/ershouche/b46">观致</a>
                <a href="/c0/ershouche/b47">GMC</a>
                <a href="/c0/ershouche/b48">光冈</a>
                <a href="/c0/ershouche/b636">广汽新能源</a>
                <a href="/c0/ershouche/b1075">国机智骏</a>
                <a href="/c0/ershouche/b1772">高合汽车</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">H</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b50">哈弗</a>
                <a href="/c0/ershouche/b51">海马</a>
                <a href="/c0/ershouche/b52">华泰</a>
                <a href="/c0/ershouche/b53">红旗</a>
                <a href="/c0/ershouche/b54">海马商用车</a>
                <a href="/c0/ershouche/b55">黄海</a>
                <a href="/c0/ershouche/b56">哈飞</a>
                <a href="/c0/ershouche/b57">海格</a>
                <a href="/c0/ershouche/b58">恒天</a>
                <a href="/c0/ershouche/b59">汇众</a>
                <a href="/c0/ershouche/b145">悍马</a>
                <a href="/c0/ershouche/b146">华普</a>
                <a href="/c0/ershouche/b160">华颂</a>
                <a href="/c0/ershouche/b173">华泰新能源</a>
                <a href="/c0/ershouche/b495">汉腾</a>
                <a href="/c0/ershouche/b560">华骐</a>
                <a href="/c0/ershouche/b668">霍顿</a>
                <a href="/c0/ershouche/b1703">HYCAN合创</a>
                <a href="/c0/ershouche/b2094">航天凌河</a>
                <a href="/c0/ershouche/b2279">黑豹</a>
                <a href="/c0/ershouche/b2363">宏瑞汽车</a>
                <a href="/c0/ershouche/b2385">华晨新日</a>
                <a href="/c0/ershouche/b2386">恒润汽车</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">I</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b1766">IMSA英飒</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">J</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b60">江淮</a>
                <a href="/c0/ershouche/b61">Jeep</a>
                <a href="/c0/ershouche/b63">吉利帝豪</a>
                <a href="/c0/ershouche/b64">捷豹</a>
                <a href="/c0/ershouche/b66">江铃</a>
                <a href="/c0/ershouche/b67">金杯</a>
                <a href="/c0/ershouche/b143">吉利</a>
                <a href="/c0/ershouche/b542">江铃集团新能源</a>
                <a href="/c0/ershouche/b572">君马汽车</a>
                <a href="/c0/ershouche/b634">捷途汽车</a>
                <a href="/c0/ershouche/b657">金冠</a>
                <a href="/c0/ershouche/b817">巨威</a>
                <a href="/c0/ershouche/b825">几何汽车</a>
                <a href="/c0/ershouche/b852">捷达</a>
                <a href="/c0/ershouche/b2366">极氪</a>
                <a href="/c0/ershouche/b2367">捷尼赛思</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">K</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b73">凯迪拉克</a>
                <a href="/c0/ershouche/b74">克莱斯勒</a>
                <a href="/c0/ershouche/b75">开瑞</a>
                <a href="/c0/ershouche/b76">科尼赛克</a>
                <a href="/c0/ershouche/b77">卡尔森</a>
                <a href="/c0/ershouche/b157">凯翼</a>
                <a href="/c0/ershouche/b158">卡威</a>
                <a href="/c0/ershouche/b552">KTM</a>
                <a href="/c0/ershouche/b562">卡升</a>
                <a href="/c0/ershouche/b678">凯佰赫</a>
                <a href="/c0/ershouche/b818">凯伦宾威</a>
                <a href="/c0/ershouche/b1720">Karma</a>
                <a href="/c0/ershouche/b2662">克蒂汽车</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">L</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b78">铃木</a>
                <a href="/c0/ershouche/b79">路虎</a>
                <a href="/c0/ershouche/b80">雷克萨斯</a>
                <a href="/c0/ershouche/b82">兰博基尼</a>
                <a href="/c0/ershouche/b83">陆风</a>
                <a href="/c0/ershouche/b84">雷诺</a>
                <a href="/c0/ershouche/b85">猎豹</a>
                <a href="/c0/ershouche/b86">劳斯莱斯</a>
                <a href="/c0/ershouche/b87">林肯</a>
                <a href="/c0/ershouche/b88">莲花</a>
                <a href="/c0/ershouche/b89">理念</a>
                <a href="/c0/ershouche/b90">路特斯</a>
                <a href="/c0/ershouche/b561">领克</a>
                <a href="/c0/ershouche/b587">LITE</a>
                <a href="/c0/ershouche/b588">拉达LADA</a>
                <a href="/c0/ershouche/b619">陆地方舟</a>
                <a href="/c0/ershouche/b640">雷丁</a>
                <a href="/c0/ershouche/b661">Lorinser</a>
                <a href="/c0/ershouche/b712">罗夫哈特</a>
                <a href="/c0/ershouche/b750">零跑汽车</a>
                <a href="/c0/ershouche/b815">理想</a>
                <a href="/c0/ershouche/b1718">凌宝汽车</a>
                <a href="/c0/ershouche/b2365">岚图汽车</a>
                <a href="/c0/ershouche/b2402">LEVC</a>
                <a href="/c0/ershouche/b2672">LUMMA</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">M</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b92">马自达</a>
                <a href="/c0/ershouche/b93">名爵</a>
                <a href="/c0/ershouche/b94">MINI</a>
                <a href="/c0/ershouche/b95">迈巴赫</a>
                <a href="/c0/ershouche/b96">玛莎拉蒂</a>
                <a href="/c0/ershouche/b97">迈凯伦</a>
                <a href="/c0/ershouche/b820">迈莎锐</a>
                <a href="/c0/ershouche/b2384">摩登汽车</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">N</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b100">纳智捷</a>
                <a href="/c0/ershouche/b713">哪吒汽车</a>
              </div>
            </div>
          </div>
          <div class="all-brand-flex">
            <div class="brand-flex-code">
              <div class="brand-flex-title">O</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b101">讴歌</a>
                <a href="/c0/ershouche/b102">欧宝</a>
                <a href="/c0/ershouche/b103">欧朗</a>
                <a href="/c0/ershouche/b635">欧拉</a>
                <a href="/c0/ershouche/b637">欧尚汽车</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">P</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b503">帕加尼</a>
                <a href="/c0/ershouche/b679">Pgo</a>
                <a href="/c0/ershouche/b716">Polestar</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">Q</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b104">起亚</a>
                <a href="/c0/ershouche/b105">奇瑞</a>
                <a href="/c0/ershouche/b106">启辰</a>
                <a href="/c0/ershouche/b107">庆铃</a>
                <a href="/c0/ershouche/b624">乔治·巴顿</a>
                <a href="/c0/ershouche/b632">前途汽车</a>
                <a href="/c0/ershouche/b2362">奇瑞途居</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">R</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b108">日产</a>
                <a href="/c0/ershouche/b109">荣威</a>
                <a href="/c0/ershouche/b110">瑞麒</a>
                <a href="/c0/ershouche/b570">如虎</a>
                <a href="/c0/ershouche/b631">瑞驰新能源</a>
                <a href="/c0/ershouche/b2360">瑞弗房车</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">S</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b34">上汽MAXUS</a>
                <a href="/c0/ershouche/b111">三菱</a>
                <a href="/c0/ershouche/b112">斯柯达</a>
                <a href="/c0/ershouche/b113">斯巴鲁</a>
                <a href="/c0/ershouche/b114">双龙</a>
                <a href="/c0/ershouche/b116">Smart</a>
                <a href="/c0/ershouche/b117">双环</a>
                <a href="/c0/ershouche/b118">世爵</a>
                <a href="/c0/ershouche/b169">思铭</a>
                <a href="/c0/ershouche/b498">斯威</a>
                <a href="/c0/ershouche/b644">斯达泰克</a>
                <a href="/c0/ershouche/b1301">思皓</a>
                <a href="/c0/ershouche/b1689">SERES赛力斯</a>
                <a href="/c0/ershouche/b1715">速达汽车</a>
                <a href="/c0/ershouche/b1717">SHELBY</a>
                <a href="/c0/ershouche/b2368">SS DOLPHIN</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">T</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b119">泰赫雅特</a>
                <a href="/c0/ershouche/b120">特斯拉</a>
                <a href="/c0/ershouche/b166">腾势</a>
                <a href="/c0/ershouche/b816">天际汽车</a>
                <a href="/c0/ershouche/b2414">坦克</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">W</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b121">五菱</a>
                <a href="/c0/ershouche/b122">沃尔沃</a>
                <a href="/c0/ershouche/b123">威麟</a>
                <a href="/c0/ershouche/b124">威兹曼</a>
                <a href="/c0/ershouche/b163">五十铃</a>
                <a href="/c0/ershouche/b544">WEY</a>
                <a href="/c0/ershouche/b571">蔚来</a>
                <a href="/c0/ershouche/b617">威马汽车</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">X</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b125">现代</a>
                <a href="/c0/ershouche/b126">雪佛兰</a>
                <a href="/c0/ershouche/b127">雪铁龙</a>
                <a href="/c0/ershouche/b128">西雅特</a>
                <a href="/c0/ershouche/b130">新凯</a>
                <a href="/c0/ershouche/b638">新特汽车</a>
                <a href="/c0/ershouche/b717">小鹏汽车</a>
                <a href="/c0/ershouche/b751">星途</a>
                <a href="/c0/ershouche/b2394">新吉奥</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">Y</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b131">一汽</a>
                <a href="/c0/ershouche/b132">英菲尼迪</a>
                <a href="/c0/ershouche/b133">野马</a>
                <a href="/c0/ershouche/b135">依维柯</a>
                <a href="/c0/ershouche/b159">英致</a>
                <a href="/c0/ershouche/b547">御捷新能源</a>
                <a href="/c0/ershouche/b565">云度新能源</a>
                <a href="/c0/ershouche/b568">云雀</a>
                <a href="/c0/ershouche/b643">宇通客车</a>
                <a href="/c0/ershouche/b838">远程汽车</a>
              </div>
            </div>
            <div class="brand-flex-code">
              <div class="brand-flex-title">Z</div>
              <div class="brand-flex-item">
                <a href="/c0/ershouche/b137">中华</a>
                <a href="/c0/ershouche/b138">众泰</a>
                <a href="/c0/ershouche/b139">中兴</a>
                <a href="/c0/ershouche/b140">中欧</a>
                <a href="/c0/ershouche/b141">中通客车</a>
                <a href="/c0/ershouche/b168">知豆</a>
                <a href="/c0/ershouche/b569">之诺</a>
                <a href="/c0/ershouche/b653">宗申</a>
                <a href="/c0/ershouche/b1076">中国重汽VGV</a>
                <a href="/c0/ershouche/b2671">智己汽车</a>
              </div>
            </div>
          </div>
        </div>
        <div class="buy-sift-div">
          <div class="sift-series-list buy-sift-div-mt">
            <div style="">车系：</div>
            <div class="series-list-div">
              <a class="sift-div-checked">不限</a>

              <a href="/c0/ershouche/s7">宝马X4 M</a>
            </div>
          </div>
        </div>
        <div class="buy-sift-div">
          <div class="sift-div-list">
            <div>车型：</div>
            <a class="sift-div-checked">不限</a>
            <a href="/c0/ershouche/default/a14">两厢轿车</a>
            <a href="/c0/ershouche/default/a15">跑车</a>
            <a href="/c0/ershouche/default/a16">SUV</a>
            <a href="/c0/ershouche/default/a17">MPV</a>
          </div>
        </div>
        <div class="buy-sift-div">
          <div class="sift-div-list" style="margin: 18px 0 8px 0">
            <div>价格：</div>
            <a class="sift-div-checked">不限</a>
            <a href="/c0/ershouche/default/d10">20万以下</a>
            <a href="/c0/ershouche/default/d11">20-30万</a>
            <a href="/c0/ershouche/default/d12">30-50万</a>
            <a href="/c0/ershouche/default/d13">50万以上</a>
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
      </div>
      <div class="sift-list">
        <div class="sift-car-top">
          <div class="car-top-left">
            <a class="top-left-checked">全部</a>
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
            v-for="(item, index) in data.arr"
            :key="index"
            target="_blank"
            class="new-item"
          >
            <div class="new-item-info">
              <div class="new-item-title">
                {{ item.seoName }}
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
        <div class="sift-car-fy" id="car-fy"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { newList } from "../api/index";

let data = reactive({
  arr: [],
});

let getList = async () => {
  let obj = await newList();
  data.arr = obj.data.data.content;
};
getList();

onMounted(() => {
  layui.use(function () {
    var laypage = layui.laypage;
    // 完整显示
    laypage.render({
      elem: "car-fy", // 元素 id
      count: 1, // 数据总数
      limit: 20,
      theme: "ob",
      layout: ["count", "prev", "page", "next", "skip"], // 功能布局
      jump: function (obj, first) {
        console.log(obj.curr);
      },
    });
  });
  layui.use("element", function () {
    var element = layui.element;
  });
});
</script>

<style lang="scss" scoped>
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
.sift-div-checked {
  color: #ffffff;
  background-color: #5685fe;
  /* border-radius: 4px; */
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
.btn-shang {
  display: none;
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
  display: none;
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
.sift-div-checked {
  color: #ffffff;
  background-color: #5685fe;
  /* border-radius: 4px; */
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
.item-info1 {
  display: flex;
  align-items: center;
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
.sift-car-fy {
  display: flex;
  justify-content: center;
}
</style>