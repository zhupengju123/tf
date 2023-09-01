import React, { useState, useEffect } from 'react'
import "./Top_model.css"
import { useNavigate, useLocation } from "react-router-dom"


const Top = () => {
    const [title_list, setTitle] = useState<any>([
        "首页",
        "二手车",
        "新车",
        "卖车",
        "腾发金融",
        "腾发服务",
    ])
    const [Highlight, setH] = useState<string>("首页")

    const locat = useLocation();
    const go = useNavigate();//跳转的方法
    useEffect(() => {
        if (locat.pathname == "/twocar") {
            setH("二手车")
        } else if (locat.pathname == "/") {
            setH("首页")
        } else if (locat.pathname.split('/')[1] == 'detail') {
            setH('')
        }
    })

    return (
        <div>
            <div className="navigate">
                <div className="navigate-div">
                    <div className="navigate-left">
                        <a className="left-img1"
                        ><img
                                src="https://www.tf2sc.cn/static/img/%E8%85%BE%E5%8F%91.png"
                                alt="腾发首页logo"
                                style={{ width: '100%', height: '100%' }}
                            /></a>
                        <img
                            src="https://www.tf2sc.cn/static/img/%E5%AE%9A%E4%BD%8D.png"
                            alt="定位图标"
                            className="left-img2"
                        />
                        <div id="index-address" className="left-address" city-code="0">全国</div>
                    </div>
                    <div className="navigate-right">
                        {/* <nuxt-link to="/">首页</nuxt-link>
                        <nuxt-link to="Two">二手车</nuxt-link>
                        <nuxt-link to="">新车</nuxt-link>
                        <nuxt-link to="">卖车</nuxt-link>
                        <nuxt-link to="">腾发金融</nuxt-link>
                        <nuxt-link to="">腾发服务</nuxt-link> */}
                        {title_list.map((item: string) => {
                            return (
                                <i
                                    className={Highlight == item ? 'right-active' : ''}
                                    key={item}
                                    onClick={() => {
                                        setH(item)
                                        if (item == "二手车") {
                                            go('/twocar')
                                        } else if (item == "首页") {
                                            go('/')

                                        }
                                    }}
                                >{item}</i>
                            )
                        })}

                        {/* <i className='right-active'>首页</i>
                        <i>二手车</i>
                        <i>新车</i>
                        <i>卖车</i>
                        <i>腾发金融</i>
                        <i>腾发服务</i> */}
                        <div className="right-phone">
                            咨询电话<span className="phone-num" id="top-phone-num"
                            >400-0606-777</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="index-right">
                <div className="index-right-div">
                    <div className="right-item" id="go-app">
                        <div className="item-container">
                            <div className="item-container-bg"></div>
                            <div>APP</div>
                        </div>
                        <div id="item-abs-app" className="item-hover item-abs-code">
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
                    <div className="right-item" id="go-wx">
                        <div className="item-container">
                            <div className="item-container-bg"></div>
                            <div>小程序</div>
                        </div>
                        <div id="item-abs-wx" className="item-hover item-abs-code">
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
                    <div className="right-item" id="go-tell">
                        <div className="item-container">
                            <div className="item-container-bg"></div>
                            <div>电话</div>
                        </div>
                        <div id="item-abs-tel" className="item-hover">400-0606-777</div>
                    </div>
                    <div className="right-item" id="go-top">
                        <div className="item-container">
                            <div className="item-container-bg"></div>
                            <div>回到顶部</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Top
