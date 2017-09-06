import React from "react"
import {View,Text,TouchableOpacity,Image,StyleSheet} from "react-native"

export default class BookItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const book = this.props.book
        return(
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imgContainer}>
                    <Image source={{uri:book.image}} style={styles.img}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text>{book.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisherAuthor}>{book.publisher}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text  style={styles.publisherAuthor}>{book.author}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.price}>{book.price}</Text>
                        <Text style={styles.pages}>{book.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
}

const styles=StyleSheet.create({
    item:{flexDirection:"row",padding:10,height:120},
    imgContainer:{justifyContent:"center",alignItems:"center"},
    img:{width:80,height:100,},
    contentContainer:{flex:1,marginLeft:15,},
    textContainer:{flex:1,justifyContent:"center"},
    publisherAuthor:{fontSize:13,color:"#a3a3a3"},
    price:{fontSize:16,color:"pink"},
    pages:{marginLeft:15,color:"#a7a8a8"}

})