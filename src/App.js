import './App.css';
import ProductList from './components/productList';


//styles for productListpage this can be overriden by users
let productliststylesoverride={
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

//styles for product card page this can be overriden by users
let productcardstylesoverride = {

  "prodWrapper":{
      display: "flex",
      flexDirection: "column",
      padding:"0px",
      boxShadow: "rgb(204, 204, 204) 6px 11px 10px 2px,-3px -2px 10px #ccc",
      margin:"10px",
      borderRadius:"10px"
  },

  "prodDesc":{
      display: "flex",
      flexDirection: "column",
      margin:"5px",
      padding:"5px",
      prodname:{
          fontSize:"12px",
          fontWeight:600,
          minHeight:"30px"
      },
      prodPrice:{
          fontSize:"18px",
          fontWeight:800,
          color:"#484747"
      }
  },

  "prodimgmain":{
      height:"290px",
      width:"100%",
      borderTopLeftRadius:"10px",
      borderTopRightRadius:"10px",
  }

}

function App() {
  return (
    <>
    <ProductList productliststylesoverride={productliststylesoverride} productcardstylesoverride={productcardstylesoverride} />
    </>
  );
}

export default App;
