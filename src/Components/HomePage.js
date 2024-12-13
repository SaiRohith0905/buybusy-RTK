import React, { useEffect, useState, useContext } from "react";
import { ProductCard } from "./ProductCard";

const HomePage = () => {
  const [productdetails, setProductDetails] = useState([]);
  const [productdetailsCopy, setProductDetailsCopy] = useState([]);

  async function fetchProductsDetails() {
    const result = await fetch("https://fakestoreapi.com/products");
    const data = await result.json();
    console.log(data);
    setProductDetails(data);
    setProductDetailsCopy(data);
  }
  useEffect(() => {
    fetchProductsDetails();
  }, []);

  useEffect(() => {}, []);
  return (
    <>
      <div className="flex gap-5">
        <aside>
          <Filter
            productDetails={productdetails}
            productdetailsCopy={productdetailsCopy}
            setProductDetails={setProductDetails}
          />
        </aside>
        <div>
          <SearchComponent
            productDetails={productdetails}
            productdetailsCopy={productdetailsCopy}
            setProductDetails={setProductDetails}
          />
          {/* <h1>HomePage</h1> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productdetails &&
              productdetails.map((epd) => (
                <ProductCard key={epd.id} product={epd} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const SearchComponent = ({
  productDetails,
  productdetailsCopy,
  setProductDetails,
}) => {
  const [searchText, setSearchText] = useState("");
  function filterProductsByName(searchWord) {
    const filteredProducts = productdetailsCopy.filter((ep) => {
      return ep.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    setProductDetails(filteredProducts);
  }
  return (
    <div className="m-auto w-[40%]">
      <input
        className="border border-blue-500 py-2 my-2 px-4 mx-4 outline-none rounded-md w-[100%]"
        type="search"
        placeholder="Search By Name"
        onChange={(e) => {
          setSearchText(e.target.value);
          // if(e.target.value == "" || e.target.value)
          filterProductsByName(e.target.value);
        }}
      />
    </div>
  );
};

const Filter = ({ productDetails, productdetailsCopy, setProductDetails }) => {
  const [price, setPrice] = useState(75000);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  const handleCategoryChange = (category) => {
    let updatedCatrgory;
    if (selectedCategories.includes(category)) {
      updatedCatrgory = selectedCategories.filter((c) => c !== category);
      //setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      updatedCatrgory = [...selectedCategories, category];
      //setSelectedCategories([...selectedCategories, category]);
    }

    setSelectedCategories(updatedCatrgory);
    // filter logic
    let filteredProducts;
    if (updatedCatrgory.length == 0) {
      filteredProducts = productdetailsCopy;
    } else {
      filteredProducts = productdetailsCopy.filter((et) => {
        // console.log(selectedCategories, et.category);

        return updatedCatrgory.includes(et.category);
      });
    }

    setProductDetails(filteredProducts);
  };

  return (
    <div className="max-w-xs p-4 bg-blue-50 rounded-lg shadow-lg">
      {/* Filter Heading */}
      <h2 className="text-lg font-bold text-center mb-4">Filter</h2>

      {/* Price Filter */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">Price: ₹{price}</p>
        <input
          type="range"
          min="0"
          max="100000"
          step="10"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            //based on price filter fi;ltered p[roducts]

            const filterByPrice = productdetailsCopy.filter((ep) => {
              console.log(ep.price, e.target.value);
              return (
                ep.price <= e.target.value &&
                selectedCategories.includes(ep.category)
              );
            });
            console.log(filterByPrice);
            setProductDetails(filterByPrice);
          }}
          className="w-full cursor-pointer accent-blue-500"
        />
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-md font-bold mb-2">Category</h3>
        <ul>
          {categories.map((category) => (
            <li key={category} className="mb-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="cursor-pointer accent-blue-500"
                />
                <span className="text-sm">{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default HomePage;
