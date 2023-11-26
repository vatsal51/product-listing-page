import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <div className="image-container">
        <img
          className="primaryImg"
          src={product.thumbnail}
          alt={product.title}
        />
        {product.images[1] && (
          <img
            className="secondaryImg"
            src={product.images[1]}
            alt={product.title}
          />
        )}
        <img src="https://picsum.photos/200/300" alt={product.title} />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <div className="details-container">
          <p className="rating">Rating: {product.rating}</p>
          <p className="description">{product.description}</p>
          <p className="price">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
