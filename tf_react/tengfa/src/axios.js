import axios from "axios"

const app = axios.create({
    baseURL: 'https://api.tf2sc.cn/api',
    timeout: 8000,
    headers: {
        Platformtype: "h5"
    }
})

app.interceptors.request.use(
    config => {
        // baseURL
        // console.log(this.baseURL);
        if (localStorage.getItem("token")) {
            config.headers["你跟你的后端 约定好的 传在请求头里面的 token 的键"] = localStorage.getItem("token")
        }
        return config
    }
)

app.interceptors.response.use(
    response => {
        // console.log(store.commit);

        const res = response
        if (res.status == 200) {
            return res
        } else if (res.status == 101) {
            alert("你的网有问题~")
        } else if (res.status == 202) {
            alert("你的网有问题~")
        } else {
            alert("你的网有问题~")
        }
    }

);
export default app
