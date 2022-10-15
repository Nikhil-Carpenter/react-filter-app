import React,{useState,useEffect} from 'react'
import "./App.css";
import Categories from "./components/categories/Categories";
// import Product from "./components/product/Product";
import ProductList from "./components/product/ProductList";
import Search from "./components/search/Search";
import {products} from "./products-data";

function App() {

  const [allProducts, setAllProducts] = useState(products)
  const [search,setSearch] = useState('');
  const [filterProducts,setFilterProducts] = useState([]);

  const handleSearch=(e)=>{
    setSearch(e.target.value);
    // console.log(search);
    
  }


  useEffect(()=>{
    setFilterProducts(
      allProducts.filter((product)=>{
        return product.title.toLowerCase().includes(search.toLowerCase())
      })
    )
  },[search,allProducts])

  const filterCategories=(category)=>{

      if(category==="all"){
        setFilterProducts(products)
        return;
      }

      let filtercategoryProducts = allProducts.filter((product,idx)=>{
        return product.category.includes(category)
      })
      setFilterProducts(filtercategoryProducts)
  }

  return (
    <div className="App">
      <div className="--mh-100vh --bg-grey">
        <header className="--bg-blue  --p">
          
          <div className="container --dir-column">
            <h1 className="--text-center --color-white">
              <span className="--mr">Product</span>
              <span>Filter</span>
            </h1>

            <div className=" filter-actions --flex-between">
              <Search inpValue={search} onInputChange={handleSearch}/>
              <Categories filterItems={filterCategories}/>
            </div>

          </div>
        </header>

        <main>
          <div className="container">
            {
              filterProducts.length===0 ?(<h2>No products Found....</h2>):(

                <ProductList products={filterProducts} />
              )
            }
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
