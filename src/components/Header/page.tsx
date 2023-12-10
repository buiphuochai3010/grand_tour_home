'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Header/header.module.scss'
import Logo from '@/assets/icons/logo@2x_white.png'
import { IoMdMenu } from "react-icons/io";
import SubMenu from './SubMenu/page'
import Cart from './Cart/page'
import { header_menu, header_menu_detail, header_menu_detail_2 } from '@/jsondata/header_menu'

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
                        <SubMenu
                            key={index}
                            data={data}
                        />
                    ))}
                    <Link href="" className={styles.menu_icon}>
                        <IoMdMenu />
                    </Link>
                    <Cart number={4} />
                </ul>
            </div>
        </div>
    )
}

export default Header