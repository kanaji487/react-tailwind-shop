import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward, IoIosBasket, IoIosCart } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";

const CartPage = ({ children }) => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div className="mt-8">
      <section className="py-4">
        <div className="container mx-auto">
          <h3 className="text-center text-2xl font-bold underline my-8">
            Your cart
          </h3>
          <div className="h-[494px]">
            <div className="uppercase text-sm font-semibold">
              Shopping bag ({itemAmount})
            </div>
            <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
              {cart.map((item) => {
                return <CartItem item={item} key={item.id} />;
              })}
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="flex w-full justify-between items-center">
              <div className="uppercase font-semibold">
                <span className="mr-2">Total : </span>{" "}
                {parseFloat(total).toFixed(2)}$
              </div>
              <div
                className="cursor-pointer py-4 bg-red-500 text-white
            w-12 h-12 flex justify-center items-center text-xl"
                onClick={clearCart}
              >
                <FiTrash2 />
              </div>
            </div>
            <Link
              to={"/"}
              className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
            >
              <IoIosCart className="mx-4 text-lg" />
              View cart
            </Link>
            <Link
              to={"/"}
              className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
            >
              <IoIosBasket className="mx-4 text-lg" />
              Checkout
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
