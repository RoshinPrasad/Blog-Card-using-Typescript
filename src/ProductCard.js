import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai'
import { MdAddShoppingCart, MdCompareArrows, MdOutlinePageview } from 'react-icons/md'
import { useCart } from "react-use-cart"
import classes from './ProductCard.module.css'
import './ProductCard.css';


const ProductCard = (props) => {
    const { image, title, salePrice, regularPrice } = props.product[0]
   
    return (
        <>
            <div class="card">
                <div class="card-header">
                    <img src={image} alt="rover" />
                </div>
                <div class="card-body">
                    <h4>{title}</h4>
                    <p>Select Your Stock </p>
                    <div class="user">
                        <div style={{ margin: '24px 0;' }}>
                            <a href="/"><i class="fa-brands fa-wordpress"></i></a>
                            <a href="/"><i class="fa-brands fa-react"></i></a>
                            <a href="/"><i class="fa-brands fa-node-js"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;