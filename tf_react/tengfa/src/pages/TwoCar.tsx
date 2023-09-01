import React, { useState, useEffect } from 'react'
import "./Two_model.css"
import { CusList, Twocar, Brand, Select } from "../api/index.js"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { id } from 'element-plus/lib/locale/index.js'



const TwoCar = () => {
    const [Flag, setFlag] = useState<B>(true)


    const [CustList, setCustList] = useState<any>({})
    const [List, setList] = useState<any>([]);
    const [BrandList, setBs] = useState<any>([])



    const [label, setlabel] = useState<any>(0); //品牌
    const [TSid, setId] = useState<N>(0);// 车型
    const [Price, setP] = useState<N>(0);// 价格
    const [Brid, setBid] = useState<N>(0);//车系ID
    const [LyCar, setLc] = useState<S>('全部');//腾发 
    const [Px, setPx] = useState<S>('默认');//腾发 



    const [UrlArr, setArr] = useState<any>([{ type: '车系', url: '' },
    { type: '车型', url: '' }, { type: '价格', url: '' },
    { type: '品牌', url: '' }, { type: '来源', url: '' }, { type: '排序', url: '' }]);//请求地址大全







    const goDel = useNavigate();

    const locat = useLocation()





    useEffect(() => {
        if (Boolean(locat.search)) {
            let id = locat.search.split("?")[1].split("=")[1]
            setlabel(id);
            console.log(id);
            getBrand(id)
            let list = [...UrlArr];
            list.forEach((item: any) => {
                if (item.type == "品牌") {
                    item.url = `&carBrand=${id}`
                }
                if (item.type == "车系") {
                    item.url = ''
                }
            })
            setArr(list)
        }
        getCusList()
        getList()
    }, [])
    useEffect(() => {
        if (Object.keys(CustList).length != 0 && List.length != 0) {
            setFlag(false)
        }
        // console.log(BrandList)
    })
    useEffect(() => {
        console.log(UrlArr)
        let urlStr = ''
        UrlArr.forEach((item: any) => {
            urlStr += item.url
        })
        if (urlStr != '') {
            console.log(urlStr);
            SelectList(urlStr)
        }

    }, [UrlArr])




    //推荐数据
    let getCusList = async () => {
        setCustList((await CusList()).data.data)
    }

    //获取所有二手车数据
    let getList = async () => {
        setList((await Twocar(1)).data.data.content)
    }
    //获取车系
    let getBrand = async (id: any) => {
        setBs((await Brand(id)).data.data.content)
    }


    //拼接参数

    let getUrl = (str: any, url: any) => {
        let list = [...UrlArr]
        list.forEach((item: any) => {
            if (str == "品牌") {
                if (item.type == "车系") {
                    item.url = ''
                }
            }

            if (str == "车系") {
                if (item.type == "品牌") {
                    item.url = ''
                }
            }

            if (item.type == str) {
                item.url = url
            }
        })
        setArr(list)
    }

    //选择数据
    let SelectList = async (str: S) => {
        setList((await Select(str)).data.data.content)

    }




    if (Flag) {
        return (
            <div className="buy-body">
                <h1>Loding...</h1>
            </div>
        )
    } else {
        return (
            <div className="buy-body_Two">
                <div className="buy-div">
                    <div className="buy-search">
                        <input type="text" id="buy-search-input" placeholder="搜索品牌、车型" />
                        <button type="button" id="buy-search-btn">搜索</button>
                    </div>
                    <div className="buy-sift">
                        <div className="buy-sift-div">
                            <div className="sift-div-list">
                                <div>品牌：</div>
                                <a href="#"
                                    onClick={() => {
                                        setlabel(0)
                                        setBs([])
                                        getUrl("品牌", "")

                                    }}
                                    className={label == 0 ? "active" : ''}
                                >不限</a>
                                {CustList.convenientBrands.map((item: any, index: N) => {
                                    return (
                                        <a
                                            className={label == Object.values(JSON.parse(item.queryRules))[0] ? 'active' : ''}
                                            key={item.queryRules} href="#"
                                            onClick={() => {
                                                let id = Object.values(JSON.parse(item.queryRules))[0]
                                                setlabel(id)
                                                getBrand(id)

                                                getUrl("品牌", `&carBrand=${id}`)



                                            }}
                                        >{item.label}</a>
                                    )

                                })}

                            </div>
                            <div id="all-btn-xia"
                                className="sift-all-btn btn-xia"
                            >
                                <span>全部</span>
                                <i></i>
                            </div>
                            <div

                                style={{ display: 'none' }}
                                id="all-btn-shang"
                                className="sift-all-btn btn-shang">
                                <span>收起</span>
                                <i></i>
                            </div>
                        </div >
                        <div className="sift-all-brand" v-show="List.flag">
                            <div className="all-brand-flex">
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">A</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div>
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">B</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div>
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">C</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">D</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">F</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                            </div >
                            <div className="all-brand-flex">
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">G</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div>
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">H</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">I</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">J</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">K</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">L</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">M</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">N</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                            </div >
                            <div className="all-brand-flex">
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">O</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div>
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">P</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">Q</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">R</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">S</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">T</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">W</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">X</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">Y</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                                <div className="brand-flex-code">
                                    <div className="brand-flex-title">Z</div>
                                    <div className="brand-flex-item">

                                    </div>
                                </div >
                            </div >
                        </div >
                        <div className="buy-sift-div">
                            <div className="sift-series-list buy-sift-div-mt">
                                <div >车系：</div>
                                <div className="series-list-div">
                                    <a
                                        onClick={() => {
                                            setBid(0)
                                            let id = locat.search.split("?")[1].split("=")[1]
                                            getUrl("品牌", `carBrand=${id}`)

                                        }}
                                        className={Brid == 0 ? 'active' : ''}
                                    >不限</a>
                                    {BrandList.length == 0 ? "" : BrandList.map((item: any) => {
                                        return (
                                            <a key={item.id}
                                                className={Brid == item.id ? 'active' : ''}
                                                onClick={() => {
                                                    setBid(item.id);
                                                    getUrl("车系", `&carSeries=${item.id}`)


                                                }}
                                            >{item.abbreviation}</a>
                                        )

                                    })}


                                </div>
                            </div >
                        </div >
                        <div className="buy-sift-div">
                            <div className="sift-div-list">
                                <div>车型：</div>
                                <a
                                    onClick={() => {
                                        setId(0)

                                        getUrl("车型", ``)
                                    }}
                                    className={TSid == 0 ? 'active' : ''}
                                >不限</a>
                                {CustList.convenientModels.map((item: any, index: N) => {
                                    return (
                                        <a key={item.queryRules}
                                            className={TSid == index + 1 ? 'active' : ''}
                                            onClick={() => {
                                                setId(index + 1)
                                                console.log();
                                                let str = `&${Object.keys(JSON.parse(item.queryRules))}=${Object.values(JSON.parse(item.queryRules))}`
                                                console.log(str);
                                                getUrl("车型", `${str}`)




                                            }}
                                        >{item.label}</a>
                                    )

                                })}
                            </div>
                        </div>
                        <div className="buy-sift-div">
                            <div className="sift-div-list" style={{ margin: "18px 0 8px 0" }}>
                                <div>价格：</div>
                                <a className={Price == 0 ? "active" : ''} onClick={() => {
                                    getUrl("价格", ``)
                                    setP(0)
                                }}>不限</a>
                                {CustList.convenientPrices.map((item: any, index: N) => {
                                    return (<a
                                        className={Price == index + 1 ? 'active' : ''}
                                        onClick={() => {
                                            setP(index + 1)
                                            let key = Object.keys(JSON.parse(item.queryRules))
                                            let val = Object.values(JSON.parse(item.queryRules))
                                            let str = ''
                                            if (Array.isArray(val[0])) {
                                                val[0].forEach((item: any) => {
                                                    console.log(item);
                                                    let s1 = `&${key}=${item}`
                                                    str += s1
                                                })
                                            } else {
                                                str = `&${key}=${val[0]}`
                                            }

                                            
                                            getUrl("价格", str)
                                        }}
                                        key={item.queryRules}>{item.label}</a>)
                                })}
                                <div className="sift-price-div">
                                    <div className="sift-price-in">
                                        <input
                                            type="text"
                                            id="min-price"

                                            placeholder="输入金额"
                                        />
                                        <span>—</span>
                                        <input
                                            type="text"
                                            id="max-price"

                                            placeholder="输入金额"
                                        />
                                        <span style={{ marginLeft: "10px" }}>万</span>
                                    </div>
                                    <button type="button" className="price-in-btn">确定</button>
                                </div>
                            </div>
                        </div>

                    </div >
                    <div className="sift-num">

                    </div>
                    <div className="sift-list">
                        <div className="sift-car-top">
                            <div className="car-top-left">
                                <a className={LyCar == "全部" ? "top-left-checked" : ''}
                                    onClick={() => {
                                        setLc("全部")
                                        getUrl('来源', '')
                                    }}
                                >全部</a>
                                <a className={LyCar == "腾发自营" ? "top-left-checked" : ''}
                                    onClick={() => {
                                        setLc("腾发自营")
                                        getUrl('来源', '&saleType=0')
                                    }}>腾发自营</a>
                                <a className={LyCar == "车主直售" ? "top-left-checked" : ''}
                                    onClick={() => {
                                        setLc("车主直售")
                                        getUrl('来源', '&saleType=1')
                                    }}>车主直售</a>
                                <a className={LyCar == "限时秒杀" ? "top-left-checked" : ''}
                                    onClick={() => {
                                        setLc("限时秒杀")
                                        getUrl('来源', '&saleType=2')
                                    }}>限时秒杀</a>
                                <a className={LyCar == "严选车源" ? "top-left-checked" : ''}
                                    onClick={() => {
                                        setLc("严选车源")
                                        getUrl('来源', '&saleType=3')
                                    }}>严选车源</a>
                            </div>
                            <div className="car-top-right">
                                <a className={Px == "默认" ? "top-right-checked" : ''} onClick={() => {
                                    getUrl("排序", "&sort=")
                                    setPx("默认")

                                }}>默认排序</a>
                                <span></span>
                                <a className={Px == "最新" ? "top-right-checked" : ''} onClick={() => {
                                    getUrl("排序", "&sort=uTime%2Cdesc")
                                    setPx("最新")
                                }}>最新发布</a>
                                <span></span>
                                <a className={Px == "最高" ? "top-right-checked" : ''} onClick={() => {
                                    getUrl("排序", "&sort=currentPrice%2Cdesc")
                                    setPx("最高")
                                }}>价格最高</a>
                                <span></span>
                                <a className={Px == "最低" ? "top-right-checked" : ''} onClick={() => {
                                    getUrl("排序", "&sort=currentPrice%2Casc")
                                    setPx("最低")
                                }}>价格最低</a>
                            </div>
                        </div>
                        <div className="sift-car-body">
                            {List.map((item: any, index: N) => {
                                return (
                                    <a
                                        target="_blank"
                                        className="list-item"
                                        key={index}
                                        onClick={() => {
                                            goDel(`/detail/${item.ind}`)

                                        }}
                                    >
                                        <div className="list-item-img">
                                            <img
                                                src={item.cover}
                                                style={{ width: '100%', height: '100%' }}
                                            />
                                            <div

                                                className={
                                                    (item.saleType == 0
                                                        ? 'type-or'
                                                        : item.saleType == 1
                                                            ? 'type-bl'
                                                            : item.saleType == 2
                                                                ? 'type-gr'
                                                                : item.saleType == 3
                                                                    ? 'type-re'
                                                                    : '') + " item-type"
                                                }
                                            >
                                                {
                                                    item.saleType == 0
                                                        ? "腾发自营"
                                                        : item.saleType == 1
                                                            ? "车主直售"
                                                            : item.saleType == 2
                                                                ? "限时特惠"
                                                                : item.saleType == 3
                                                                    ? "严选好车"
                                                                    : ""
                                                }
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

                        </div >
                        <div className="sift-car-fy" id="car-fy"></div>
                    </div >
                </div >
                {/* <template>
                    <el-pagination background width="200px" height="100px" layout="prev, pager, next" total="1000" />
                </template> */}
            </div >
        )
    }




}

export default TwoCar
