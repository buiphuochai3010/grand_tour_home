import Link from 'next/link';
import styles from '@/styles/Header/sidebar.module.scss'
import { IoCloseOutline } from "react-icons/io5";
import { header_menu } from '@/jsondata/header_menu';

const SideBar = () => {
    return (
        <>
            <input type='checkbox' id='sidebar-trigger' className={styles.sidebar_trigger} />
            <label htmlFor='sidebar-trigger' className={styles.overlay} />
            <div className={styles.sidebar_container}>
                <label htmlFor='sidebar-trigger' className={styles.sidebar_button_close} >
                    <IoCloseOutline />
                </label>
                <ul className={styles.sidebar_menu_container}>
                    {header_menu.map((data, index) => (
                        <li key={index}>
                            <Link href={data.path} className={styles.sidebar_menu_text}>
                                {data.menu_name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SideBar