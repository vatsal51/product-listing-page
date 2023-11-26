// ProductList.js
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import MarketingBanner from "./MarketingBanner";
import { fetchProductsData } from "../api";
import FilterComponent from "./FilterComponent";
import "./productlist.css";

const ProductList = () => {
  // State variables to manage products, visible products, sorting, filters, loading state, and selected price range
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(7);
  const [sortType, setSortType] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [selectedPriceRange, setSelectedPriceRange] = useState("");
  // const productRef = useRef(null);

  useEffect(() => {
    // Fetching products data and initializing filters once on component mount
    fetchProductsData()
      .then((data) => {
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
          initializeFilters(data.products);
        } else {
          console.error("Products array not found in data:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to set initial filters based on product data
  const initializeFilters = (data) => {
    const uniqueCategories = Array.from(
      new Set(data.map((product) => product.category))
    );
    const uniqueBrands = Array.from(
      new Set(data.map((product) => product.brand))
    );

    // Filtering out unique filters to prevent repeating filters
    setCategories(
      uniqueCategories.map((category) => ({ name: category, checked: false }))
    );
    setBrands(uniqueBrands.map((brand) => ({ name: brand, checked: false })));
  };

  // Function to handle change in filter for categories and brands
  const handleFilterChange = (index, type) => {
    if (type === "category") {
      const updatedCategories = [...categories];
      updatedCategories[index] = {
        ...updatedCategories[index],
        checked: !updatedCategories[index].checked,
      };
      setCategories(updatedCategories);
    } else if (type === "brand") {
      const updatedBrands = [...brands];
      updatedBrands[index] = {
        ...updatedBrands[index],
        checked: !updatedBrands[index].checked,
      };
      setBrands(updatedBrands);
    }
  };

  // Filtering products based on selected category, brand, and price range
  const filterProducts = (product) => {
    // const isUnder100 = selectedPriceRange === "under100" && product.price < 100;
    // const isAbove100 = selectedPriceRange === "above100" && product.price >= 100;

    return (
      (categories.every((category) => !category.checked) ||
        categories.some(
          (category) => category.name === product.category && category.checked
        )) &&
      (brands.every((brand) => !brand.checked) ||
        brands.some((brand) => brand.name === product.brand && brand.checked))
      //   &&
      // (selectedPriceRange === "" || isUnder100 || isAbove100)
    );
  };

  // Function to handle change in sort type
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const sortedAndFilteredProducts = () => {
    let sorted = [...products];
    if (sortType === "lowToHigh") {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "highToLow") {
      sorted = sorted.sort((a, b) => b.price - a.price);
    }
    return sorted.filter(filterProducts);
  };

  // Function to load more products when the user scrolls to the bottom
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading
    ) {
      setLoading(true);
      setTimeout(() => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
        setLoading(false);
      }, 1000);
    }
  };

  // Function to clear all applied filters
  const clearAllFilters = () => {
    setCategories(
      categories.map((category) => ({ ...category, checked: false }))
    );
    setBrands(brands.map((brand) => ({ ...brand, checked: false })));
  };

  return (
    <div className="productContainer">
      {/*Filters section including Category and Brand filters*/}
      <div className="filters">
        <b>Total Products: </b> ({products.length}){/* Category filter */}
        <div className="clearFilter">
          <h3>Filters</h3> <p onClick={clearAllFilters}>Clear Filters</p>{" "}
        </div>
        <div className="categories filterType">
          {/* <h4>Categories <span>-</span></h4> */}
          <FilterComponent
            items={categories}
            filter="Category"
            handleFilterChange={(index) =>
              handleFilterChange(index, "category")
            }
          />
        </div>
        {/* Brand filter */}
        <div className="Brands filterType">
          {/* <h4>Brands <span>-</span> </h4> */}
          <FilterComponent
            items={brands}
            filter="Brand"
            handleFilterChange={(index) => handleFilterChange(index, "brand")}
          />
        </div>
      </div>
      <div className="productlistWrapper">
        <div className="categoryBanner">
          <img
            src="https://picsum.photos/1920/400.webp"
            alt="Category Banner"
          ></img>
        </div>
        {/* Sorting options */}
        {/* Price range filter */}

        <div className="priceSort">
          <label htmlFor="priceSort">Sort by: </label>
          {/* <select
            name="priceSort"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="">All</option>
            <option value="under100">Under $100</option>
            <option value="above100">Above $100</option>
          </select> */}
          <select name="priceSort" value={sortType} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
        <div className="product-list">
          {/* Display sorted and filtered products */}
          {sortedAndFilteredProducts()
            .slice(0, visibleProducts)
            .map((product, index) => (
              <div key={index} className="product-card">
                {(index + 1) % 6 === 0 && index !== 0 && <MarketingBanner />}
                {!((index + 1) % 6 === 0) && <ProductCard product={product} />}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
