import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increseAmount, decreseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product image
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              total
            </th>
          </tr>
        </thead> */}
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img className="max-w-[80px]" src={image} alt="" />
            </th>
            <td className="px-6 py-4">
              <Link
                to={`/product/${id}`}
                className="text-sm uppercase font-medium text-right max-w-[240px] text-white hover:underline"
              >
                {title}
              </Link>
            </td>
            <td className="px-6 py-4">{price}$</td>
            <td className="px-6 py-4">
              <div className="flex gap-x-2 h-[36px] text-sm">
                <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                  <div
                    className="flex-1 h-full flex justify-center items-center cursor-pointer text-white"
                    onClick={() => decreseAmount(id)}
                  >
                    <IoMdRemove />
                  </div>
                  <h5 className="h-full flex justify-center items-center px-2 text-white">
                    {amount}
                  </h5>
                  <div
                    className="flex-1 h-full flex justify-center items-center cursor-pointer text-white"
                    onClick={() => increseAmount(id)}
                  >
                    <IoMdAdd />
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <p className="flex-1 flex justify-end items-center text-white font-medium">
                {`${parseFloat(price * amount).toFixed(2)}$`}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
