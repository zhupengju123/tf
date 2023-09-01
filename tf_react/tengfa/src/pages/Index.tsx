import React, { useEffect, useState } from 'react'
import "./Index_model.css"
import { useNavigate } from "react-router-dom"
import { CusList, list, indexNews } from "../api/index.js"

const Index = () => {
    const [CustList, setCustList] = useState<any>({})
    const [Flag, setFlag] = useState<B>(true) //判断数据是否请求完成
    const [List, setList] = useState<any>([])
    const [NewList, setNew] = useState<any>([])

    const goTwo = useNavigate();

    const goDel = useNavigate();

    useEffect(() => {
        getCusList()
        getList()
        getNews()
    }, [])


    useEffect(() => {
        if (Object.keys(CustList).length != 0 && List.length != 0 && NewList.length != 0) {
            setFlag(false)
        }
    })

    //推荐数据
    let getCusList = async () => {
        setCustList((await CusList()).data.data)
    }
    //二手车数据
    let getList = async () => {
        setList((await list()).data.data.content)
    }
    //新闻
    let getNews = async () => {
        setNew((await indexNews()).data.data)

    }


    if (Flag) {
        return (
            <div className="index-body">
                <h1 className='Loding'>Loding.....</h1>
            </div>
        )
    } else {
        return (
            <div className="index-body">

                <div className="body-bg"></div>
                <div className="body-search">
                    <div className="search">
                        <img
                            src="https://www.tf2sc.cn/static/img/%E5%8D%96%E8%BD%A6%E7%9A%84%E5%A5%BD%E5%A4%84.png"
                            alt="首页顶部车图"
                            className="body-car-img"
                        />
                        <div className="search-gd">腾发二手车</div>
                        <div className="search-sr">
                            <input
                                type="text"
                                placeholder="搜索品牌、车型"
                                className="search-input"
                                id="search-in"
                            />
                            <button type="button" className="search-btn" id="search-btn">搜索</button>
                        </div>
                        <div className="buy-sell">
                            <div className="buy">
                                <div className="buy-title">
                                    <div className="search-line"></div>
                                    <div className="title-text">我要买车</div>
                                </div>
                                <div className="buy-search">
                                    <div className="search-div">
                                        {CustList.convenientBrands.map((item: any) => {
                                            // console.log(item);
                                            return (
                                                <a
                                                    onClick={() => {
                                                        let obj = JSON.parse(item.queryRules)
                                                        goTwo(`/twocar?${Object.keys(obj)}=${Object.values(obj)}`)

                                                    }}
                                                    key={item.queryRules} className="div-brand" >
                                                    <img src={item.logo} key={item.logo} />
                                                    <span key={item.label}>{item.label}</span>
                                                </a>)
                                        })}


                                    </div>
                                    <div className="search-div">
                                        {CustList.convenientPrices.map((item: any) => {
                                            return (<a key={item.queryRules} className="div-price">
                                                {item.label}
                                            </a>)
                                        })}

                                    </div>
                                    <div className="search-div">
                                        {CustList.convenientModels.map((item: any) => {
                                            return (<a key={item.queryRules} className="div-price">{item.label}</a>)
                                        })}

                                    </div>
                                </div>
                            </div>
                            <div className="sell">
                                <div className="buy-title">
                                    <div className="search-line"></div>
                                    <div className="title-text">我要卖车</div>
                                </div>
                                <div className="sell-container">
                                    <div className="container-left">
                                        <div className="container-input">
                                            <input
                                                type="number"
                                                placeholder="请输入手机号"
                                                id="container-gz-in"

                                            />
                                            <button type="button" id="container-gz-btn">立即估值</button>
                                        </div>
                                        <div className="container-gz">
                                            <a href="/c0/sell.html" className="gz-link">
                                                <img
                                                    src="https://www.tf2sc.cn/static/img/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1.png"
                                                />
                                                <span>全国代购</span>
                                            </a>
                                            <div className="gz-line"></div>
                                            <a href="/c0/sell1.html" className="gz-link">
                                                <img
                                                    src="https://www.tf2sc.cn/static/img/%E5%88%B0%E5%BA%97%E4%BC%B0%E5%80%BC.png"
                                                />
                                                <span>到店估值</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="container-right">
                                        <img
                                            src="https://www.tf2sc.cn/static/img/%E6%88%91%E8%A6%81%E5%8D%96%E8%BD%A6.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="body-car">
                    <div className="car-list">
                        <div className="list-title">
                            <div className="list-left">
                                <div className="search-line"></div>
                                <div className="title-text">二手车</div>
                            </div>
                            <a className="list-left">
                                <span>查看更多</span>
                                <img
                                    src="https://www.tf2sc.cn/static/img/icon_%E6%9B%B4%E5%A4%9A.png"
                                />
                            </a>
                        </div>
                        {/* <div className="item-type type-re">限时特惠</div> */}
                        <div className="list">
                            {List.map((item: any) => {
                                return (
                                    <a className='list-item'
                                        onClick={() => {
                                            goDel(`/detail/${item.ind}`)

                                        }}
                                        key={item.ind} target='_blank'>
                                        <div className="list-item-img">
                                            <img src={item.cover} style={{ width: '100%', height: '100%' }} alt="" />
                                            <div className="item-type type-or">
                                                腾发自营
                                            </div>
                                        </div>
                                        <div className="item-info">
                                            <div className="item-info-title">
                                                {item.carName}
                                            </div>
                                            <div className="item-info-time">
                                                {new Date(item.dateOfRegistration).getFullYear()}年{
                                                    new Date(item.dateOfRegistration).getMonth() + 1
                                                }月 / {item.mileage}万公里
                                            </div>
                                            <div className="item-info-price">
                                                <span className="price1">{item.currentPrice}万</span>
                                            </div>
                                        </div>
                                    </a>

                                )

                            })}

                        </div>

                        <div className="list-title">
                            <div className="list-left">
                                <div className="search-line"></div>
                                <div className="title-text">新闻资讯</div>
                            </div>
                            <a className="list-left">
                                <span>查看更多</span>
                                <img
                                    src="https://www.tf2sc.cn/static/img/icon_%E6%9B%B4%E5%A4%9A.png"
                                />
                            </a>
                        </div>
                        <div className="list">
                            {NewList.map((item: any, index: N) => {
                                if (index < 2) {
                                    return (
                                        <a key={item.id} className="news-item">
                                            <img alt="新闻首图" src={item.cover} className="news-img" />
                                            <div className="news-item-info">
                                                <div className="news-item-title news-title1">{item.title}</div>
                                                <div className="news-item-title news-title2">{item.simple}</div>
                                                <div className="news-num">
                                                    <div>{item.utime.split("T")[0]}</div>
                                                </div>
                                            </div>
                                        </a>)
                                }

                            })}



                        </div>
                    </div >
                </div >
            </div >
        )
    }

}

export default Index
