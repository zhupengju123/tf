import axios from "../axios.js"


//推荐车系
export let CusList = () => {
    return axios({
        method: 'get',
        url: '/tfcar/car/convenient'
    })
}

//首页
export let list = () => {
    return axios({
        method: 'get',
        url: '/tfcar/car/list?'
    })
}
//新闻
export let indexNews = () => {
    return axios({
        method: 'get',
        url: '/tfcar/website/indexNews'
    })
}
////二首页全部数据
export let Twocar = (page) => {
    return axios({
        method: 'get',
        url: `tfcar/car/list?page=${page}&sort=`
    })
}
//详情页
export let Datails = (id) => {
    return axios({
        method: 'get',
        url: `tfcar/car/basicInfo/${id}`
    })
}
//推荐车
export let Recom = (id) => {
    return axios({
        method: 'get',
        url: `tfcar/car/similarRecommendation/${id}`
    })
}



//获取车系
// https://api.tf2sc.cn/api/tfcar/car/series300?brandId=9  
export let Brand = (id) => {
    return axios({
        method: 'get',
        url: `tfcar/car/series300?brandId=${id}`
    })
}


//车系选项


// https://api.tf2sc.cn/api/tfcar/car/list?page=1&carBrand=1

// https://api.tf2sc.cn/api/tfcar/car/list?page=1&carSeries=34057

// https://api.tf2sc.cn/api/tfcar/car/list?page=1&currentPriceLt=10 价钱
// https://api.tf2sc.cn/api/tfcar/car/list?page=1&currentPrices=10&currentPrices=20
// https://api.tf2sc.cn/api/tfcar/car/list?page=1&currentPriceGe=100


//https://api.tf2sc.cn/api/tfcar/car/list?page=1&carModel=1 车型


// https://api.tf2sc.cn/api/tfcar/car/list?page=1&sort=&displacementLt=1
// &driveType=0&emissionStandardType=3&fuelType=0&gearboxType=0&mileageLt=1&seat=4

//https://api.tf2sc.cn/api/tfcar/car/list?page=1&saleType=0 腾发自营 saleType=1 车主  &saleType=2 特惠


//https://api.tf2sc.cn/api/tfcar/car/list?page=1&sort= 排序
//https://api.tf2sc.cn/api/tfcar/car/list?page=1&sort=uTime%2Cdesc 最新发布
//https://api.tf2sc.cn/api/tfcar/car/list?page=1&sort=currentPrice%2Cdesc  价格最高
// https://api.tf2sc.cn/api/tfcar/car/list?page=1&sort=currentPrice%2Casc  价格最低


export let Select = (str) => {
    return axios({
        method: 'get',
        url: `tfcar/car/list?page=1${str}`
    })
}



