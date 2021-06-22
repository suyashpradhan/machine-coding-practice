export const Product = ({ product }) => {
  return (
    <div className="card" key={product._id}>
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
      ></img>
      <div className="card-body">
        <h3 className="text-primary">{product.name}</h3>
        <h4 className="text-secondary">{product.brand}</h4>
        <h5 className="text-ternary">Rs {product.discountedPrice}</h5>
      </div>
    </div>
  );
};
