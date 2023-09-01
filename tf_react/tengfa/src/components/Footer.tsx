import React from 'react'
import "./Footer_model.css"

const Footer = () => {
    return (
        <div>
            <div className="index-bottom">
                <div className="bottom1">
                    <div className="bottom-div bottom1-div">
                        <img src="https://www.tf2sc.cn/static/img/tengfa.png" className="bottom1-img" />
                        <div className="bottom-line"></div>
                        <div className="bottom-text1">真实车源</div>
                        <a href="/c0/ershouche" className="bottom-nav">二手车</a>
                        <a href="/c0/journalism" className="bottom-nav">新闻资讯</a>
                        <a href="/c0/commonProblem" className="bottom-nav">常见问题</a>
                    </div>
                </div>
                <div className="bottom2">
                    <div className="bottom-div">
                        <div className="bottom2-top">
                            <div>
                                <div className="top-tel" id="bottom-tel">咨询电话：400-0606-777</div>
                                <div id="bottom-time">
                                    营业时间：周一至周日 早 8:00 - 晚 12:00
                                </div>
                            </div>
                            <div className="bottom2-code">
                                <div className="code">
                                    <img
                                        src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734978.jpg"
                                        id="hCode"
                                    />
                                    <div>关注腾发名车<br />微信公众号</div>
                                </div>
                                <div className="code">
                                    <img
                                        src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734976.jpg"
                                        id="wxCode"
                                    />
                                    <div>扫码打开小程序<br />关注更多信息</div>
                                </div>
                                <div className="code">
                                    <img
                                        src="https://tfcar.oss-cn-hangzhou.aliyuncs.com/149815731972734977.jpg"
                                        id="appCode"
                                    />
                                    <div>下载app<br />关注更多信息</div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom2-bt">
                            <div>
                                腾发二手车以二手车销售、新车销售、汽车分期、汽车保险、维修保养、汽车改装、汽车收购置换为主营业务，是集实体与线上为一体的综合性购车用车销售服务平台。
                            </div>
                            <div className="">
                                门店地址：【国基路店】郑州市花园路与国基路交汇处西南角
                                【天伦路店】郑州市花园路与天伦路交汇处向东50米路南
                            </div>
                            <div className="">
                                腾发二手车目前营业面积3万余平实体展厅，近5000平独立的售后服务中心，3000余台的常态库存涵盖各种国际品牌名车。全国二手车经营示范基地，百万车主信赖之选！
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom3">
                    <div className="bottom-div">
                        <div className="bottom3-bq">
                            Copyright © 2014 - 2021 All Rights Reserved 版权所有<a
                                href="https://beian.miit.gov.cn/"
                            >豫ICP备14025595号</a>
                        </div>
                        <div className="bottom3-imgs">
                            <img src="	https://www.tf2sc.cn/static/img/cert_01.jpg" />
                            <img src="https://www.tf2sc.cn/static/img/cert_02.jpg" />
                            <img src="https://www.tf2sc.cn/static/img/cert_03.jpg" />
                            <img src="https://www.tf2sc.cn/static/img/cert_04.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
