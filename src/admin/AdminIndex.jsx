import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";
import "./index.css";
import ProductDetails from "./product_form";
import { RiArrowDownSLine } from 'react-icons/ri';

const AdminIndex = () => {
  const [show, setShow] = useState(false)

  return (


    <div className="admin_panel">
      <button onClick={() => setShow(!show)} className="addProduct-btn">Add Product <span><RiArrowDownSLine /></span></button>
      {
        show ? <div className="mid-scr-form"><ProductDetails /></div> : ""
      }

      <div className="form"><ProductDetails /></div>
      <div className="dash"><Dashboard /></div>
    </div>

  );
};

export default AdminIndex;
