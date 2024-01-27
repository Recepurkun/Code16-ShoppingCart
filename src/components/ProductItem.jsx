import React from "react";

function ProductItem({ product, cart, setCart }) {
  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = (product) => {
    //setCart([...cart, product])
    setCart((prevState) => [...prevState, product]);
  };

  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <img
        src={product.image}
        alt=""
        className="w-full h-48 obj-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold"> {product.name} </h2>
        <p className="text-gray-500 my-2"> {product.price} </p>
        <button
          className={`bg-blue-500 text-white px-4 py-[8px] rounded hover:bg-blue-600 w-full ${findProduct && "opacity-50 cursor-no-drop"}`}
          onClick={() => addToCart(product)}
          disabled={findProduct}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
