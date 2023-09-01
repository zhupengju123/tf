var api = 'https://api.tf2sc.cn/api/'

export let list = () => {
  return useFetch(`${api}/tfcar/car/list?`).data._rawValue
}

export let list1 = (id) => {
  return useFetch(`${api}/tfcar/car/series300?brandId=${id}`).data._rawValue
}

export let Cust = () => {
  return useFetch(`${api}/tfcar/car/convenient`).data._rawValue
}
export let newList = () => {
  return useFetch(`${api}/tfcar/newCar/list?`).data._rawValue

}
export let indexNews = () => {
  return useFetch(`${api}/tfcar/website/indexNews`).data._rawValue

}






