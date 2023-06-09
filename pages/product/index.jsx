import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const itemsExtra = [
  {
    id: 1,
    name: "Extra 1",
    price: 1,
  },
  {
    id: 2,
    name: "Extra 2",
    price: 2,
  },
  {
    id: 3,
    name: "Extra 3",
    price: 3,
  },
];

const foodItems = [
  {
    id: 1,
    name: "Pizza 1",
    price: 10,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit corporis ex laboriosam tenetur at ad aspernatur",
    extraOptions: [
      {
        id: 1,
        name: "Extra 1",
        price: 1,
      },
    ],
  },
];

const Index = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(itemsExtra);
  const [extras, setExtras] = useState([]);
  const cart = useSelector((state) => state.cart);

  const handleClick = () => {
    dispatch(addProduct({ ...foodItems[0], extras, price, quantity: 1 }));
  };

  console.log(cart);
  const dispatch = useDispatch();

  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  return (
    <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap ">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 mx-10 ">
        <Title addClass="text-[35px] mb-2">Good Pizza</Title>
        <p className="font-bold text-primary text-2xl mb-4">${price}</p>
        <p className="text-secondary mb-4">
          Lorem Ipsum is simply dummy text of the <br></br>printing and
          typesetting industry.
        </p>
        <div className="mb-4">
          <h4 className="font-bold text-secondary mb-4">Choose The Size</h4>
          <div className="flex items-center gap-x-20">
            <div
              className="relative w-8  h-8 items-center cursor-pointer"
              onClick={() => handleSize(0)}
            >
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="bg-primary absolute -top-2 -right-8 text-[10px] py-1 px-2 rounded-full">
                Small
              </span>
            </div>
            <div
              className="relative w-12  h-12 items-center cursor-pointer"
              onClick={() => handleSize(1)}
            >
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="bg-primary absolute -top-2 -right-9 text-[10px] py-1 px-2 rounded-full">
                Medium
              </span>
            </div>
            <div
              className="relative w-16  h-16 items-center cursor-pointer"
              onClick={() => handleSize(2)}
            >
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="bg-primary absolute -top-2 -right-6 text-[10px] py-1 px-2 rounded-full">
                Large
              </span>
            </div>
          </div>
        </div>
        <h4 className="font-bold text-secondary ">Choose Additional</h4>
        <div className="flex gap-x-4 mt-4">
          {extraItems.map((item) => (
            <label className="flex items-center gap-x-1" key={item.id}>
              <input
                type="checkbox"
                className="w-5 h-5 accent-primary"
                onChange={(e) => handleChange(e, item)}
              />
              <span className="text-sm font-semibold">{item.name}</span>
            </label>
          ))}
        </div>
        <div className="pt-8">
        <button className="btn-primary" onClick={handleClick}>
          Add to Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
