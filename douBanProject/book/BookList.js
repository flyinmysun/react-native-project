import React from "react"
import {View,ScrollView,ListView,StyleSheet} from "react-native"
import Util from "./../comment/util"
import SearchBar from "../../douBanProject/comment/searchBar"
import Service from "../comment/service"
import BookItem from "../../douBanProject/book/BookItem"

export default class BookList extends React.Component{
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (oldRow, newRow) => oldRow !== newRow});
        this.state={
            dataSource:ds,
            show:false,//网络请求状态标识
            keyWord:"react"  //搜索关键字
        }
    }
    getData(){
        //开启loading，每次搜索都要重新加载数据
        this.setState({show:false});
        let url=Service.BookSearch+"?count=20&q="+this.state.keyWord
        let that=this

       /* success=(data)=>{ //返回成功调用函数

            //做判断，搜出来没有结果
            if(!data.books||data.books.length==0){
                return alert("未查询到相关书籍")
            }
            let ds = new ListView.DataSource({rowHasChanged: (oldRow, newRow) => oldRow !== newRow});
            this.setState({
               show:true,
               dataSource:ds.cloneWithRows(data.books)

            })

        }
        fail=(error)=>{
            alert(error)
        }
        Util.getRequests(url,success,fail)*/
        Util.getRequests(url,function (data) {
            if(!data.books||data.books.length==0){
                return alert("未查询到相关书籍")
            }
            let ds = new ListView.DataSource({rowHasChanged: (oldRow, newRow) => oldRow !== newRow});
            that.setState({
                show:true,
                dataSource:ds.cloneWithRows(data.books)

            })

        },function (error) {
            alert(error)
        })
    }
    getList=(book)=>{
        return(
            <BookItem book={book}/>
        )

    }
    getLine=(sectionID:number,rowID:number)=>{
        const style = {height:1,backgroundColor:"#ccc"}
        return(
            <View style={style} key={sectionID+rowID}/>
        )

    }


    render(){
        return(
            <ScrollView>
                <SearchBar/>
                {
                    //请求数据时，显示loading，数据请求成功后，显示listView
                    this.state.show?
                        <ListView dataSource={this.state.dataSource} initialListSize="10"
                        renderRow={this.getList()} renderSeparator={this.getLine()}/>
                    :Util.loading

                }
            </ScrollView>
        )
    }

    componentDidMount(){
        //页面加载时，请求数据
        this.getData()

    }
}

const styles=StyleSheet.create({

})