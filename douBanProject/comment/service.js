import React from "react"

const BaseURL =" https://api.douban.com/v2/"
let url = {
    //搜索
    BookSearch:`${BaseURL}+"book/search"`,
    //图书详情
    BookDetail:`${BaseURL}+"book/"`,
    //电影搜索
    MovieSearch:`${BaseURL}+"movie/search"`,
}

export default url