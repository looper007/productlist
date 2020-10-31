import React from 'react'
import Product from './product';
import axios from 'axios';


let styles={
    productlistwrapper:{
        display:"flex",
        flexDirection:"row",
        padding:"10px",
        margin:"10px",
        justifyContent: "space-evenly",
        flexBasic:"20%",
    },
    paginatorwrapper:{
        display:"flex",
        flexDirection:"row",
        padding:"10px",
        margin:"5px",
        width:"100%",
        justifyContent: "center",
        paginatebutton:{
            minWidth:"30px",
            minHeight:"30px",
            lineHeight:"15px",
            padding:"10px",
            margin: "5px",
            fontWeight:"600",
            background:"#fff",
            border:"1px solid #ccc",
            cursor:"pointer",
            boxShadow: "1px 2px 8px #d0cccc",
            borderRadius: "5px",
        },
        paginatebuttonactive:{
            minWidth:"30px",
            minHeight:"30px",
            lineHeight:"15px",
            padding:"10px",
            margin: "5px",
            fontWeight:"600",
            background:"#fff",
            cursor:"pointer",
            boxShadow: "1px 2px 8px #d0cccc",
            borderRadius: "5px",
            border:"2px solid #2c8affe0",
        }
    }
    
}

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            catalogurl:"https://raw.githubusercontent.com/jampanisolutions/jsondata/main/page",
            productCatalogData:{},
            pagination:{},
            curPageIndex:1,
        };
    }

    componentDidMount(){
       this.getProductbyPage(1);
    }

    getProductbyPage=(index)=>{

        if(index && index!==0){
            axios.get(this.state.catalogurl+index)
            .then(response => {
                this.renderProducts(response);
            })
            .catch(error => {
                console.log(error)
            });
        }
    }

    renderProducts=(response)=>{
       
        if(response.status===200){
            this.setState({
                productCatalogData:response.data,
                pagination:response.data.pagination
            });
        }
        else{
            alert("could not retrieve data");
        }
    }

    paginateHandler=(type,index)=>{
        if(!type){
            this.getProductbyPage(index);
            this.setState({
                curPageIndex: index,
            });
        }
        else{
            if(type==="prev" && this.state.curPageIndex>1){
                this.getProductbyPage(this.state.curPageIndex-1);
                this.setState({
                    curPageIndex: this.state.curPageIndex-1,
                });
               
            }
            else if(type==="next"){
                this.getProductbyPage(this.state.curPageIndex+1);
                this.setState({
                    curPageIndex: this.state.curPageIndex+1,
                });
                
            }
        }
    }


    render(){
        if(this.props.productliststylesoverride){
            styles = this.props.productliststylesoverride;
        }
        return(
            <>  
            
            <div className={this.props.productlistwrapperclass} style={this.props.productlistwrapperstyles?this.props.productlistwrapperstyles:styles.productlistwrapper}>
                {this.state.productCatalogData && this.state.productCatalogData.productList && this.state.productCatalogData.productList.length >0 ?
                <>
                {this.state.productCatalogData.productList.map((cur,index)=>{
                return <Product cardcustomclass={this.props.cardcustomclass} productcardstylesoverride={this.props.productcardstylesoverride} key={cur.name+index} {...cur} >
                    <></>
                </Product>
                 })}
                </> 
                    :<div>Currently we don't have any Items! Please visit later.</div>
                }
            </div>

            {this.state.productCatalogData && this.state.productCatalogData.productList && this.state.productCatalogData.productList.length >0 ?
            <>
            <div className={this.props.paginationclass} style={this.props.overridepaginatestyles?this.props.overridepaginatestyles:styles.paginatorwrapper}>
                    <button className={this.props.previousbuttonclass} disabled={this.state.curPageIndex===1} 
                     onClick={()=>{this.paginateHandler("prev")}} style={styles.paginatorwrapper.paginatebutton}> &lt; Prev </button>

                    {
                     function(){
                        let buttons=[];
                        let that = this;
                        for(var i=1;i<=3;i++){
                            let k=i;
                            buttons.push(
                                <button key={i} className={that.props.paginationbuttonclass} 
                                    onClick={()=>{that.paginateHandler(null,k)}}
                                    style={k===that.state.curPageIndex ? styles.paginatorwrapper.paginatebuttonactive: styles.paginatorwrapper.paginatebutton}>{i}</button>
                            );  
                        }
                        return buttons
                     }.call(this)
                    }
                 <button className={this.props.nextbuttonclass}  disabled={this.state.curPageIndex===3} onClick={()=>{this.paginateHandler("next")}} style={styles.paginatorwrapper.paginatebutton}> Next &gt; </button>
            </div>
            </>:<></>}
            
            </>

        )
    }

}

export default ProductList;