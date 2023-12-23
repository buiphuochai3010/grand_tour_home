'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Header/header.module.scss'
import styles_sidebar from '@/styles/Header/sidebar.module.scss'
import Logo from '@/assets/icons/logo@2x_white.png'
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import SubMenu from './SubMenu/page'
import Cart from './Cart/page'
import { header_menu } from '@/jsondata/header_menu'

const Header = () => {

    return (
        <div className={styles.header_container}>
            <div className={styles.header_wrapper}>
                <Image
                    src={Logo}
                    width={92}
                    height={22}
                    alt="Logo"
                />
                <ul className={styles.menu_wrapper}>
                    {header_menu.map((data, index) => (
                        <li
                            key={index}
                            className={styles.sub_menu_container}
                        >
                            <Link
                                className={styles.sub_menu_link}
                                href={data.path}
                            >
                                <p className={styles.sub_menu_text}>{data.menu_name}</p>
                                <FaChevronDown className={styles.sub_menu_icon} />
                            </Link>
                            <SubMenu data={data} />
                        </li>
                    ))}
                    <label htmlFor='sidebar-trigger' className={styles.menu_icon}>
                        <input type='checkbox' className={styles_sidebar.sidebar_trigger} id='sidebar-trigger' />
                        <IoMdMenu />
                    </label>
                    <Cart number={4} />
                </ul>
            </div>
        </div>
    )
}

export default Header