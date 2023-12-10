'use client'

import { FaCartShopping } from "react-icons/fa6";
import styles from '@/styles/Header/header.module.scss'
import Link from "next/link";

const Cart = ({ ...props }) => {
    return (
        <Link
            target="__blank"
            href="https://themes.themegoods.com/grandtour/demo/cart/"
            className={styles.header_cart}
        >
            <FaCartShopping />
            <span className={styles.header_cart_number}>{props.number}</span>
        </Link>
    )
}

export default Cart