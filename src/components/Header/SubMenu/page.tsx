'use client'

import { useState } from 'react'
import styles from '@/styles/Header/header.module.scss'
import Link from 'next/link'
import { FaChevronDown } from "react-icons/fa";
import { header_menu_detail, header_menu_detail_2 } from '@/jsondata/header_menu';

const SubMenu = ({ ...props }) => {
    const [isShowDropDown, setIsShowDropDown] = useState(false)
    const [isShowDropDown2, setIsShowDropDown2] = useState(false)

    return (
        <li
            className={styles.sub_menu_container}
            onMouseEnter={() => setIsShowDropDown(true)}
            onMouseLeave={() => setIsShowDropDown(false)}
        >
            <Link
                className={styles.sub_menu_link}
                href={props.data.path}
            >
                <p className={styles.sub_menu_text}>{props.data.menu_name}</p>
                <FaChevronDown className={styles.sub_menu_icon} />
            </Link>
            {isShowDropDown &&
                <ul className={styles.sub_menu_detail_container}>
                    {header_menu_detail.map((data, index) =>
                        props.data.id_menu === data.id_menu
                            ? (
                                <li
                                    key={index}
                                    className={styles.sub_menu_text}
                                    onMouseEnter={() => setIsShowDropDown2(true)}
                                    onMouseLeave={() => setIsShowDropDown2(false)}
                                >
                                    <Link
                                        href={data.path}
                                    >
                                        <p className={styles.sub_menu_detail_text}>
                                            {data.menu_detail_name}
                                        </p>
                                    </Link>
                                    {isShowDropDown2 &&
                                        <ul className={styles.sub_menu_detail_container_2}>
                                            {header_menu_detail_2.map((data2, index) =>
                                                data2.id_menu_detail === data.id_menu_detail
                                                    ? (
                                                        <li
                                                            key={index}
                                                            className={styles.sub_menu_text}
                                                        >
                                                            <Link
                                                                href={data2.path}
                                                            >
                                                                <p className={styles.sub_menu_detail_text}>
                                                                    {data2.menu_detail_name}
                                                                </p>
                                                            </Link>
                                                        </li>
                                                    )
                                                    : null
                                            )}
                                        </ul>
                                    }
                                </li>
                            )
                            : null
                    )}
                </ul>
            }
        </li>
    )
}

export default SubMenu