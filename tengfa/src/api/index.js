import axios from "../plugins/axios.js";

export let list = () => {
    return axios({
        method: 'get',
        url: '/tfcar/car/list?'
    })
}

export let newList = () => {
    return axios({
        method: 'get',
        url: '/tfcar/newCar/list?'
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

export let News = () => {
    return axios({
        method: 'get',
        url: 'tfcar/website/allNews'
    })
}

export let Mark = () => {
    return axios({
        method: 'get',
        url: 'tfcar/website/allMarketGuide'
    })
}
export let Datails = (id) => {
    return axios({
        method: 'get',
        url: `/tfcar/car/basicInfo/${id}`
    })
}
// /tfcar/car/similarRecommendation/202106161151190127
//同类推荐
export let Recom = (id) => {
    return axios({
        method: 'get',
        url: `/tfcar/car/similarRecommendation/${id}`
    })
}
//推荐品牌
export let Cust = () => {
    return axios({
        method: 'get',
        url: 'tfcar/car/customSeries'
    })
}


//品牌
export let Carses = () => {
    return axios({
        method: 'get',
        url: 'tfcar/car/brand300'
    })
}

//车系
export let Select = (id) => {
    return axios({
        method: 'get',
        url: `tfcar/car/series300?brandId=${id}`
    })
}





//一级分类
export let OneSelect = (id) => {
    return axios({
        method: 'get',
        url: `tfcar/car/list?page=1&carBrand=${id}`
    })
}
//二级分类数据
export let TwoSelect = (id) => {
    console.log(id);
    return axios({
        method: 'get',
        url: `tfcar/car/list?page=1&carSeries=${id}`
    })
}