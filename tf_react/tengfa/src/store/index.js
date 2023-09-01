import { configureStore } from "@reduxjs/toolkit"
import list_slice from "./one_slice"


export default configureStore({

    //挂载切片
    reducer: {
        list_slice,
      
    }
})

