import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Order Confirmed!</h2>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default OrderSummary;
