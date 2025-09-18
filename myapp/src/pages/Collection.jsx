import React, { useContext,useState,useEffect } from 'react'
import { ShopContext } from '../components/ShopContext';
import dropDown from '../assets/down-arrow.png'
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';


const Collection = () => {
  
  const { products } =useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false);
  const [filterProducts ,setFilterProducts] =useState([])
   const [category ,setCategory] = useState([]);
  
  const [subcategory ,setSubCategory] = useState([]);
  const toggleCategory =(e) =>{
     
    if(category.includes(e.target.value)){
       setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev =>[...prev,e.target.value])
    }



  }
  const toggleSubCategory =(e) =>{
     
    if(subcategory.includes(e.target.value)){
       setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }



  }
  const applyFilter = () => {
  let productsCopy = products.slice();

  if (category.length > 0) {
    productsCopy = productsCopy.filter(item => category.includes(item.category));
  }

  if (subcategory.length > 0) {
    productsCopy = productsCopy.filter(item => subcategory.includes(item.type));
  }

  setFilterProducts(productsCopy);
};

 

    useEffect(()=>{
          
           setFilterProducts(products)
          
   
   
   
   
       },[ ]);
       useEffect (()=>{ 
        applyFilter();

       },[category,subcategory])
   
return (
  <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t">
    
    {/* LEFT FILTER SECTION */}
    <div className="w-full sm:w-1/4 lg:w-1/5">
      <p 
        onClick={() => setShowFilter(!showFilter)} 
        className="my-2 text-xl flex items-center cursor-pointer gap-2"
      >
        FILTERS
        <img 
          className={`h-3 sm:hidden ${showFilter ? "" : "hidden"}`} 
          src={dropDown} 
          alt="" 
        />
      </p>

      {/* Category Filter */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
        <p className="mb-3 text-sm font-medium">CATEGORIES</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <label className="flex gap-2">
            <input className="w-3" type="checkbox" onChange={toggleCategory} value="men" />Men
          </label>
          <label className="flex gap-2">
            <input className="w-3" type="checkbox" onChange={toggleCategory} value="women" />Women
          </label>
          <label className="flex gap-2">
            <input className="w-3" type="checkbox" onChange={toggleCategory} value="kids" />Kids
          </label>
        </div>
      </div>

      {/* Sub Filter */}
      <div className={`border border-gray-300 my-5 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
        <p className="mb-3 text-sm font-medium">TYPE</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <label className="flex gap-2">
            <input className="w-3" type="checkbox" onChange={toggleSubCategory} value="topwear" />Topwear
          </label>
          <label className="flex gap-2">
            <input className="w-3" type="checkbox" onChange={toggleSubCategory} value="bottomwear" />Bottomwear
          </label>
          <label className="flex gap-2">
            <input className="w-3" type="checkbox" onChange={toggleSubCategory} value="winterwear" />Winterwear
          </label>
        </div>
      </div>
    </div>

    {/* RIGHT PRODUCTS SECTION */}
    <div className="flex-1">
      <div className="flex justify-between text-base sm:text-2xl mb-4">
        <Title text1="All" text2="COLLECTIONS" />

        {/* Product Sort */}
        <select className="border-2 border-gray-300 text-sm px-2">
          <option value="relevant">Sort by: Relevant</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {filterProducts.map((item, index) => (
          <ProductItems 
            key={index} 
            id={item._id} 
            image={item.image} 
            name={item.name} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  </div>
)
}
export default Collection