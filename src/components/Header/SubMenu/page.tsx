import styles from '@/styles/Header/header.module.scss'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import { header_menu_detail, header_menu_detail_2 } from '@/jsondata/header_menu';

const SubMenu = ({ ...props }) => {
    return (
        <ul className={styles.sub_menu_detail_container}>
            {header_menu_detail.map((data, index) =>
                props.data.id_menu === data.id_menu &&
                (<li
                    key={index}
                    className={styles.sub_menu_detail_hover}
                >
                    <Link
                        className={styles.sub_menu_detail_link}
                        href={data.path}
                    >
                        <p className={styles.sub_menu_detail_text}>
                            {data.menu_detail_name}
                        </p>
                        {data.is_expand === true
                            ? <IoIosArrowForward className={styles.sub_menu_detail_icon} />
                            : null
                        }
                    </Link>

                    <ul className={styles.sub_menu_detail_container_2}>
                        {header_menu_detail_2.map((data2, index2) =>
                            data2.id_menu_detail === data.id_menu_detail &&
                            (<li
                                key={index2}
                            >
                                <Link href={data2.path}>
                                    <p className={styles.sub_menu_detail_text_2}>
                                        {data2.menu_detail_name}
                                    </p>
                                </Link>
                            </li>)
                        )}
                    </ul>
                </li>)
            )}
        </ul >

    )

}
export default SubMenu