import React, { useEffect, useState } from 'react'
import "./Detail_model.css"
import { useParams, useNavigate } from "react-router-dom"
import { Datails, Recom } from "../api/index.js"


const Details = () => {
    const goDel = useNavigate();
    const param = useParams()
    const [flag, setflag] = useState<B>(true)

    const [List, setList] = useState<any>({});//总数据

    const [Parme, setPar] = useState<any>({});//车辆信息
    const [priceVo, setPce] = useState<any>([]);//车辆价格详情
    const [photoArr, setPho] = useState<any>([]);//照片
    const [Xiangqing, setXQ] = useState<any>([]);//详细照片
    const [Year, setYear] = useState<S>("");//上牌年份
    const [Mount, setMount] = useState<S>("");//上牌月份
    const [Color, setColor] = useState<S>("");//颜色
    const [gearbox, setBox] = useState<S>("");
    const [BigImg, setBg] = useState<S>("")
    const [Time, setTime] = useState<any>([])
    const [RecomArr, setRec] = useState<any>([]);//推荐车列表





    useEffect(() => {
        getList(param.id)
        getRec(param.id)

    }, [])
    useEffect(() => {
        if (Object.keys(List).length != 0) {
            setflag(false)
        }
    })


    let getList = async (id: any) => {
        await Datails(id).then((res: any) => {
            setList(res.data.data)
            setPar(res.data.data.parameterVo)
            setPce(res.data.data.priceVo)
            setPho(res.data.data.photoVo.carousel.split(","))
            setXQ(res.data.data.photoVo.detail.split(","))
            setYear(res.data.data.dateOfRegistration.split("-")[0])
            setMount(res.data.data.dateOfRegistration.split("-")[1])
            setBox(res.data.data.parameterVo.gearbox)
            setBg(res.data.data.cover)
            setColor(res.data.data.parameterVo.carColor)

            if (Parme.deliveryTime == undefined) {
                setTime(["--", "--"])
            } else {
                setTime(Parme.deliveryTime.split("-"))
            }

        })

    }
    let getRec = async (id: any) => {
        setRec((await Recom(id)).data.data)

    }

    if (flag) {
        return (
            <div className="Del">
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div>
                <div className="detail">
                    <div className="detail1" id="ershou1">
                        <div className="detail-div detail-info">
                            <div className="detail-info-left">
                                <img id="left-imgurl" src={BigImg} />
                                <div className="left-imgs">
                                    <div className="imgs-div">
                                        {photoArr.map((item: any) => {
                                            return (
                                                <img key={item}
                                                    onMouseEnter={() => {
                                                        setBg(item)
                                                    }}
                                                    src={item} />
                                            )
                                        })}

                                    </div>
                                    <div className="imgs-change" id="change-left">
                                        <img src="	https://www.tf2sc.cn/static/img/zuo.png" />
                                    </div>
                                    <div className="imgs-change" id="change-right" style={{ display: "none" }}>
                                        <img src="	https://www.tf2sc.cn/static/img/you.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="detail-info-right">
                                <div className="info-carid">
                                    车架号：<span>{List.carId}</span>
                                </div>
                                <div className="info-title">
                                    {List.carName}
                                </div>
                                <div className="info-detail">
                                    <div className="detail-item" style={{ width: "98px" }}>
                                        <div>{Year}年{Mount}月</div>
                                        <div className="item-title">上牌时间</div>
                                    </div>
                                    <div className="item-line"></div>
                                    <div className="detail-item">
                                        <div>{List.mileage}万公里</div>
                                        <div className="item-title">公里数</div>
                                    </div>
                                    <div className="item-line"></div>
                                    <div className="detail-item">
                                        <div>{Color}</div>
                                        <div className="item-title">车身颜色</div>
                                    </div>
                                    <div className="item-line"></div>
                                    <div className="detail-item">
                                        <div>{gearbox}</div>
                                        <div className="item-title">变速箱</div>
                                    </div>
                                    <div className="item-line"></div>
                                    <div className="detail-item" style={{ width: "64px" }}>
                                        <div>{List.displacement}L</div>
                                        <div className="item-title">排量</div>
                                    </div>
                                    <div className="detail-item" style={{ width: "98px" }}>
                                        <div>{Parme.fuel}</div>
                                        <div className="item-title">燃油方式</div>
                                    </div>
                                    <div className="item-line"></div>
                                    <div className="detail-item">
                                        <div>{Parme.emissionStandard}</div>
                                        <div className="item-title">排放标准</div>
                                    </div>
                                    <div className="item-line"></div>
                                    <div className="detail-item">
                                        <div>{Time[0]}月{Time[1]}</div>
                                        <div className="item-title">出厂日期</div>
                                    </div>
                                    <div className="item-line"></div>
                                    <div className="detail-item">
                                        <div>{Parme.carTransfer}</div>
                                        <div className="item-title">过户次数</div>
                                    </div>
                                </div>
                                <div className="info-price">
                                    <span className="price1">{List.currentPrice}万</span>
                                    <span className="price2">新车价：{priceVo.carNetPrice}万</span>
                                    <span className="price3"
                                    >为您节约
                                        <span></span>{
                                            (priceVo.carNetPrice - List.currentPrice).toFixed(2)
                                        }万</span>
                                </div>
                                <div className="info-anjie">
                                    <div className="triangle"></div>
                                    <img src="https://www.tf2sc.cn/static/img/anjie.png" />
                                    <span>灵活按揭</span>
                                    <span className="anjie">
                                        首付<span>30%</span>，月供<span>4,624元</span>(36)期
                                    </span>
                                </div>
                                <div className="info-advisory">
                                    <button type="button" className="advisory-online online-consult">
                                        在线咨询
                                    </button>
                                    <button type="button" className="advisory-tel">联系电话</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-div">
                    <div className="option-title">
                        <div className="option-line"></div>
                        车辆描述
                    </div>
                    <div className="remark">暂无描述</div>
                    <div className="service">
                        <div className="service-title">
                            <div>//</div>
                            <div className="service1">服务承诺</div>
                            <div>//</div>
                        </div>
                        <div className="service-info">
                            <div className="service-item">
                                <img src="https://www.tf2sc.cn/static/img/ketui.png" />
                                <div>7天无理由可退</div>
                            </div>
                            <div className="service-item">
                                <img src="https://www.tf2sc.cn/static/img/kehuan.png" />
                                <div>15天可换</div>
                            </div>
                            <div className="service-item">
                                <img src="https://www.tf2sc.cn/static/img/zhibao.png" />
                                <div>终身质保</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-div" id="ershou2">
                    <div className="option-title">
                        <div className="option-line"></div>
                        检测报告
                    </div>
                    <div className="report-img"></div>
                    <div className="report-detail">
                        <div className="report-item">
                            <span>基本信息核查</span>
                            <div className="report-item-ok">
                                <img src="https://www.tf2sc.cn/static/img/tongguo.png" />
                                <span>已检测</span>
                            </div>
                        </div>
                        <div className="report-item">
                            <span>动力系统检测</span>
                            <div className="report-item-ok">
                                <img src="https://www.tf2sc.cn/static/img/tongguo.png" />
                                <span>已检测</span>
                            </div>
                        </div>
                        <div className="report-item">
                            <span>车身外观检测</span>
                            <div className="report-item-ok">
                                <img src="https://www.tf2sc.cn/static/img/tongguo.png" />
                                <span>已检测</span>
                            </div>
                        </div>
                        <div className="report-item">
                            <span>功能部件检测</span>
                            <div className="report-item-ok">
                                <img src="https://www.tf2sc.cn/static/img/tongguo.png" />
                                <span>已检测</span>
                            </div>
                        </div>
                        <div className="report-item">
                            <span>重大事故排查</span>
                            <div className="report-item-ok">
                                <img src="https://www.tf2sc.cn/static/img/tongguo.png" />
                                <span>已检测</span>
                            </div>
                        </div>
                        <div className="report-mode"></div>
                    </div>
                    <div className="report-code">
                        <img
                            src="https://www.tf2sc.cn/api/tfcar/share/inspectionReport/202106161151190127"
                            className="report-wx"
                        />
                        <div className="report-code-text">
                            <div className="code1">微信扫码 查看<span>完整</span>检测报告</div>
                            <div className="code2">
                                <img src="https://www.tf2sc.cn/static/img/wxsm.png" />
                                <div className="code2-text">
                                    <div style={{ marginBottom: "24px" }}>打开微信</div>
                                    <div>点击页面右上角“+”，打开扫一扫</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="detail-div" id="ershou3">
                    <div className="option-title">
                        <div className="option-line"></div>
                        车辆图片
                    </div>
                    <div className="detail-photos">
                        {Xiangqing.map((item: any) => {
                            return (
                                <img key={item} src={item} />
                            )
                        })}

                    </div>
                </div>
                <div className="detail-div" id="ershou4">
                    <div className="option-title">
                        <div className="option-line"></div>
                        同类推荐
                    </div>
                    <div className="recommend-list">
                        {RecomArr.map((item: any, index: N) => {
                            if (index < 4) {
                                return (
                                    <a key={index}
                                        onClick={() => {
                                            goDel(`/detail/${item.ind}`)
                                            getList(item.ind)
                                            getRec(item.ind)

                                            window.scrollTo({
                                                top: 0

                                            })



                                        }}
                                        target="_blank" className="list-item">
                                        <div className="list-item-img">
                                            <img src={item.cover} style={{ width: '100%', height: '100%' }} />
                                            <div className="item-type type-gr">严选车源</div>
                                        </div>
                                        <div className="item-info">
                                            <div className="item-info-title">
                                                {item.carName}
                                            </div>
                                            <div className="item-info-time">
                                                {new Date(item.dateOfRegistration).getFullYear()} 年{
                                                    new Date(item.dateOfRegistration).getMonth() + 1
                                                }月 / {item.mileage}万公里
                                            </div>
                                            <div className="item-info-price">
                                                <span className="price1">{item.currentPrice}万</span>
                                            </div>
                                        </div>
                                    </a>
                                )
                            }
                        })}



                    </div>
                </div >
            </div >
        )
    }






}


export default Details
