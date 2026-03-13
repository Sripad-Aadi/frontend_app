import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import axios from "axios"

function Cart() {
  const { cart, setCart, user, setUser } = useContext(AppContext);
  const [orderValue, setOrderValue] = useState(0);
  const API_URL = import.meta.env.VITE_API_URL
  const Navigate = useNavigate()

  const increment = (id) => {
    setCart(
      cart.map((item) => {
        if (item._id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }),
    );
  };
  const decrement = (id) => {
    setCart(
      cart.map((item) => {
        if (item._id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      }),
    );
  };

  const placeOrder = async ()=>{
        const url = API_URL+'/orders/placeOrder'
        console.log(url)
        const order ={
            email:user.email,
            orderValue:orderValue,
            items:cart
        }
        console.log('in placeorder')
        const response = await axios.post(url,order)
        console.log(response.data)
        Navigate('/')
    }

  useEffect(() => {
    setOrderValue(
      cart.reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0),
    );
  }, [cart]);

  return (
    <div>
      <h1>My Cart</h1>
      <ol>
        {cart.map((item) => (
          <li key={item._id}>
            {item.name}-{item.price}-
            <button onClick={() => decrement(item._id)}>-</button>
            {item.quantity}
            <button onClick={() => increment(item._id)}>+</button>-
            {item.quantity * item.price}
          </li>
        ))}
      </ol>
      <p>
        <strong>Order Value:{orderValue}</strong>
      </p>
      <p>
        <button onClick={placeOrder}>Place Order</button>
      </p>
    </div>
  );
}
export default Cart;